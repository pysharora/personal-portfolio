import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** The wordmark's accent block, standing in as the favicon. */
const Icon = () =>
  new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0e0e0e",
        color: "#f3efe6",
        fontSize: 44,
        fontWeight: 400,
        fontFamily: "Impact, Haettenschweiler, sans-serif",
      }}
    >
      P<span style={{ color: "#ff4a1c" }}>.</span>
    </div>,
    { ...size },
  );

export default Icon;
