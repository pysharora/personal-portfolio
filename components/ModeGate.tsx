"use client";

import { useEffect, useRef } from "react";
import {
  modeBootKicker,
  modeBootName,
  modeGateFootHint,
  modeGateHalves,
  modeGateSkipLabel,
  modeGateTopName,
  modeGateTopTagline,
  modeHeadlineWords,
  modeLoaderLabel,
} from "@/data/mode-gate";
import { commitMode } from "@/lib/mode-store";
import type { Mode } from "@/lib/mode";

const setSiteInert = (inert: boolean) => {
  const content = document.getElementById("site-content");
  if (content) content.inert = inert;
};

/**
 * The boot curtain + "Pick your build" gate + post-choice loader — a direct
 * port of design-reference/gate.html's own script, operating on refs via
 * plain DOM calls (classList, style, animate) the same way that file does,
 * rather than a from-scratch React state machine. Two differences from the
 * reference, both required to sit inside a real site instead of a standalone
 * demo page:
 *   - the "done" screen auto-advances into the real homepage instead of
 *     sitting on a fake "this is where your site would load" placeholder;
 *   - the real page is kept in the DOM throughout (never display:none, so
 *     crawlers still see it) and is made `inert` instead while covered.
 * Always rendered — CSS alone decides whether `body.gating` makes any of
 * this visible. It plays on every visit by design; a #pm/#engineer hash in
 * the URL is the one way to land directly in a mode with no gate at all.
 */
const ModeGate = () => {
  const gateRef = useRef<HTMLElement>(null);
  const bootRef = useRef<HTMLDivElement>(null);
  const bootInRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const barFillRef = useRef<HTMLElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const doneKRef = useRef<HTMLParagraphElement>(null);
  const doneHRef = useRef<HTMLHeadingElement>(null);
  const progRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const gate = gateRef.current;
    const boot = bootRef.current;
    const bootIn = bootInRef.current;
    const count = countRef.current;
    const barFill = barFillRef.current;
    const done = doneRef.current;
    const doneK = doneKRef.current;
    const doneH = doneHRef.current;
    const prog = progRef.current;
    if (
      !gate ||
      !boot ||
      !bootIn ||
      !count ||
      !barFill ||
      !done ||
      !doneK ||
      !doneH ||
      !prog
    ) {
      return;
    }

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timers: number[] = [];
    const frames: number[] = [];

    // -- boot loader: counts to 100, then the curtain splits open. Only for
    // a genuine first visit — everything below this (choosing, keyboard
    // shortcuts, "Change view") still needs to work on every other visit. --
    if (!document.body.classList.contains("gating")) {
      boot.style.display = "none";
      bootIn.style.display = "none";
    } else {
      const openBoot = () => {
        boot.classList.add("is-open");
        timers.push(
          window.setTimeout(() => {
            boot.style.display = "none";
            bootIn.style.display = "none";
          }, 900),
        );
      };

      if (reduce) {
        openBoot();
      } else {
        const t0 = performance.now();
        const dur = 1100;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          count.textContent = String(Math.round(e * 100)).padStart(2, "0");
          barFill.style.width = `${e * 100}%`;
          if (p < 1) {
            frames.push(window.requestAnimationFrame(tick));
          } else {
            timers.push(window.setTimeout(openBoot, 180));
          }
        };
        frames.push(window.requestAnimationFrame(tick));
      }
    }

    // -- mode loader: headline builds word by word, progress line fills --
    const showLoader = (mode: Mode) => {
      const pm = mode === "pm";
      done.style.background = pm ? "#f3efe6" : "#0e0e0e";
      done.style.color = pm ? "#14161c" : "#f3efe6";
      done.style.setProperty("--acc", pm ? "#2a3bff" : "#ff4a1c");
      doneK.textContent = modeLoaderLabel[mode];
      doneH.innerHTML = modeHeadlineWords[mode]
        .map((word) =>
          "mark" in word && word.mark
            ? `<span><mark>${word.text}</mark></span>`
            : `<span>${word.text}</span>`,
        )
        .join(" ");
      done.style.display = "flex";
      prog.style.width = "0";

      const finish = () => {
        document.body.classList.remove("gating");
        setSiteInert(false);
        done.style.display = "none";
        // The browser's native scroll-to-a-leftover-hash (see the init
        // script) can still be mid-animation right as the gate goes away,
        // for anyone who picks a side very quickly. A plain reset here
        // would just lose that race the same way a single early one does,
        // so reassert over the next few frames too — cheap, and the exact
        // moment this actually becomes visible to someone.
        const resetScroll = () =>
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        resetScroll();
        let frame = 0;
        const reassert = () => {
          resetScroll();
          frame += 1;
          if (frame < 6) window.requestAnimationFrame(reassert);
        };
        window.requestAnimationFrame(reassert);
      };

      if (reduce) {
        finish();
        return;
      }

      doneH.querySelectorAll("span").forEach((span, i) => {
        span.animate(
          [
            { transform: "translateY(40%)", opacity: 0 },
            { transform: "none", opacity: 1 },
          ],
          {
            duration: 450,
            delay: i * 110,
            easing: "cubic-bezier(.2,.7,.2,1)",
            fill: "backwards",
          },
        );
      });

      const run = prog.animate([{ width: "0%" }, { width: "100%" }], {
        duration: 1100,
        easing: "cubic-bezier(.6,0,.2,1)",
        fill: "forwards",
      });
      run.onfinish = () => {
        timers.push(window.setTimeout(finish, 400));
      };
    };

    const choose = (mode: Mode) => {
      if (gate.classList.contains("go")) return;

      // Clear any leftover section hash here too, rather than trusting the
      // init script's earlier attempt to have stuck — commitMode reads the
      // current URL and would otherwise carry a stale #work straight into
      // the ?mode= link it writes.
      if (window.location.hash) {
        try {
          history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search,
          );
        } catch {
          // Non-fatal: worst case the old hash rides along.
        }
      }

      commitMode(mode);

      const half = gate.querySelector<HTMLElement>(`[data-mode="${mode}"]`);
      half?.classList.add("picked");
      gate.classList.add("go");

      timers.push(window.setTimeout(() => showLoader(mode), reduce ? 0 : 750));
    };

    const handleHalfClick = (event: Event) => {
      const half = (event.currentTarget as HTMLElement).dataset.mode as Mode;
      choose(half);
    };

    const halves = gate.querySelectorAll<HTMLButtonElement>(".half");
    halves.forEach((half) => half.addEventListener("click", handleHalfClick));

    const skip = document.getElementById("mode-gate-skip");
    const handleSkip = () => choose("engineer");
    skip?.addEventListener("click", handleSkip);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof Element &&
        event.target.closest("input, textarea")
      ) {
        return;
      }
      const key = event.key.toLowerCase();
      if (key === "e") choose("engineer");
      if (key === "p") choose("pm");
    };
    window.addEventListener("keydown", handleKeyDown);

    const handleReopen = () => {
      setSiteInert(true);
      document.body.classList.add("gating");
      gate.classList.remove("go");
      halves.forEach((half) => half.classList.remove("picked"));
      done.style.display = "none";
      boot.style.display = "none";
      bootIn.style.display = "none";
    };
    window.addEventListener("reopen-mode-gate", handleReopen);

    return () => {
      halves.forEach((half) =>
        half.removeEventListener("click", handleHalfClick),
      );
      skip?.removeEventListener("click", handleSkip);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("reopen-mode-gate", handleReopen);
      timers.forEach((id) => window.clearTimeout(id));
      frames.forEach((id) => window.cancelAnimationFrame(id));
    };
  }, []);

  return (
    <>
      <main
        className="gate"
        ref={gateRef}
        aria-label="Choose how to view this portfolio"
      >
        {(Object.keys(modeGateHalves) as Mode[]).map((mode) => {
          const half = modeGateHalves[mode];
          const words = modeHeadlineWords[mode];

          return (
            <button
              type="button"
              key={mode}
              className={`half ${mode === "engineer" ? "eng" : "pm"}`}
              data-mode={mode}
              aria-label={half.srLabel}
            >
              <p className="kicker">{half.kicker}</p>
              <p className="word">{half.word}</p>
              {"expand" in half && (
                <p className="word-expand" aria-hidden="true">
                  {half.expand}
                </p>
              )}
              <p className="line">
                {words.map((word, index) => (
                  <span key={`${word.text}-${index}`}>
                    {"mark" in word && word.mark ? (
                      <mark>{word.text}</mark>
                    ) : (
                      word.text
                    )}{" "}
                  </span>
                ))}
              </p>
              <ul className="peek">
                {half.peek.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="cta">
                <span className="enter">Enter →</span>
                <span className="key">
                  or press <kbd>{half.key}</kbd>
                </span>
              </div>
            </button>
          );
        })}
      </main>

      <div className="top" aria-hidden="true">
        <p>{modeGateTopName}</p>
        <p>{modeGateTopTagline}</p>
      </div>

      <div className="seam" aria-hidden="true">
        or
      </div>

      <div className="foot">
        <span>{modeGateFootHint}</span>
        <span>
          Not sure?{" "}
          <button type="button" id="mode-gate-skip">
            {modeGateSkipLabel}
          </button>
        </span>
      </div>

      <div className="done" ref={doneRef} role="status" aria-live="polite">
        <p className="k" ref={doneKRef} />
        <h2 ref={doneHRef} />
        <i className="prog" ref={progRef} />
      </div>

      <div className="boot" ref={bootRef} aria-hidden="true">
        <i />
        <i />
      </div>
      <div className="bootIn" ref={bootInRef} aria-hidden="true">
        <div>
          <p>
            <span>{modeBootName}</span>
            <span>{modeBootKicker}</span>
          </p>
          <div className="count" ref={countRef}>
            00
          </div>
          <div className="bar">
            <b ref={barFillRef} />
          </div>
        </div>
      </div>
    </>
  );
};

export { ModeGate };
