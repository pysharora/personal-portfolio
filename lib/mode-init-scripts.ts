import { DEFAULT_MODE, PRINT_STORAGE_KEY } from "@/lib/mode";

/**
 * Resolves the engineer/PM mode and the hidden print theme before the first
 * paint. The `?mode=` query param is the only source for mode — never
 * localStorage, and never the hash (the header nav's section links are hash
 * anchors, so a mode-in-hash scheme would get overwritten the moment
 * someone clicks one). The param is explicit and visible: it sits in the
 * address bar and survives a copy-pasted link, rather than being silently
 * remembered behind the scenes.
 *
 * The boot loader and "Pick your build" gate play on every visit — it is
 * the site's intro, not a one-time onboarding step. A ?mode=pm or
 * ?mode=engineer param is the one bypass: sharing a link with that param
 * drops someone straight into that mode with no gate at all.
 */
export const modeInitScript = `
(function () {
  try {
    var body = document.body;
    body.classList.add("js");

    var params = new URLSearchParams(window.location.search);
    var modeParam = params.get("mode");
    var hasParam = modeParam === "pm" || modeParam === "engineer";
    var mode = hasParam ? modeParam : ${JSON.stringify(DEFAULT_MODE)};

    if (mode === "pm") body.classList.add("pm");
    // Named "gating", not "gate" — the gate's own halves element is
    // literally class="gate" (design-reference/gate.html), and a body-level
    // flag with the same name would match that selector too.
    if (!hasParam) {
      body.classList.add("gating");
      // A leftover section hash (someone clicked a nav link, then refreshed)
      // would otherwise make the browser scroll straight to that section —
      // invisible for now since the opaque gate covers everything, but it's
      // also the reason ModeGate's finish() does its own final reset: the
      // browser's native scroll-to-fragment can still land after this point,
      // and that reset (at the moment the gate actually goes away) is what
      // makes it correct for the one moment it's visible. A genuine ?mode=
      // deep link keeps its hash untouched, since that combination is an
      // intentional deep link.
      if (window.location.hash) {
        try {
          history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search,
          );
        } catch (_) {}
      }
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } catch (_) {}
    }

    try {
      if (localStorage.getItem(${JSON.stringify(PRINT_STORAGE_KEY)}))
        body.classList.add("print");
    } catch (_) {}
  } catch (_) {}
})();
`;

/**
 * Runs after `#site-content` exists in the HTML stream (it's placed below
 * that element) so it can make the real page `inert` the instant the gate
 * is up — never `display: none`, so crawlers still see full content.
 */
export const siteInertScript = `
(function () {
  try {
    if (document.body.classList.contains("gating")) {
      var content = document.getElementById("site-content");
      if (content) content.inert = true;
    }
  } catch (_) {}
})();
`;
