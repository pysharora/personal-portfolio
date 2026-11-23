export type Mode = "engineer" | "pm";

/** The hidden print theme is the only preference still kept in storage. */
export const PRINT_STORAGE_KEY = "print";

export const DEFAULT_MODE: Mode = "engineer";

export const isMode = (value: unknown): value is Mode =>
  value === "engineer" || value === "pm";

/** Page background per mode, used by the colour wipe between modes. */
export const modeBackground: Record<Mode, string> = {
  engineer: "#0e0e0e",
  pm: "#f3efe6",
};

export const printBackground = "#fbfaf7";

/** Copy that changes with the engineer/PM switch. */
export type ModeCopy = Readonly<Record<Mode, string>>;
