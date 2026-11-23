"use client";

/** Reopens the mode gate; `ModeGate` listens for this event. */
const ChangeViewButton = () => {
  const reopen = () => {
    window.dispatchEvent(new Event("reopen-mode-gate"));
  };

  return (
    <button type="button" className="footer-change-view" onClick={reopen}>
      Change view
    </button>
  );
};

export { ChangeViewButton };
