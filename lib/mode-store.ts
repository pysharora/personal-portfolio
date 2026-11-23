import { DEFAULT_MODE, PRINT_STORAGE_KEY, type Mode } from "./mode";

/**
 * The body classes are the source of truth for the active mode: the inline
 * script in the root layout sets them before the first paint, and React reads
 * them through `useSyncExternalStore`.
 */
const listeners = new Set<() => void>();

const emit = () => {
  for (const listener of listeners) listener();
};

export const subscribeToMode = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const getMode = (): Mode =>
  document.body.classList.contains("pm") ? "pm" : DEFAULT_MODE;

export const getServerMode = (): Mode => DEFAULT_MODE;

export const getIsPrint = () => document.body.classList.contains("print");

export const getServerIsPrint = () => false;

export const commitMode = (mode: Mode) => {
  document.body.classList.toggle("pm", mode === "pm");
  // The `?mode=` query param is the one explicit, visible record of the
  // chosen mode — never localStorage, and never the hash (the header nav's
  // section links are hash anchors — #work, #contact — so encoding mode
  // there would get silently overwritten the moment someone clicks one).
  // `replaceState` avoids a history entry; the hash and other params, if
  // any, are left untouched.
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("mode", mode);
    history.replaceState(null, "", url);
  } catch {
    // Non-fatal: the mode still applies for the rest of this view.
  }
  emit();
};

export const commitPrint = (isPrint: boolean) => {
  document.body.classList.toggle("print", isPrint);
  try {
    localStorage.setItem(PRINT_STORAGE_KEY, isPrint ? "1" : "");
  } catch {
    // The theme still applies for the rest of the session.
  }
  emit();
};
