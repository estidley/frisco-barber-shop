import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 48,
              background: "#1e4bb8",
            }}
          />
          <div
            style={{
              width: 48,
              height: 84,
              background:
                "repeating-linear-gradient(-45deg, #c51d2e 0 12px, #ffffff 12px 18px, #1e4bb8 18px 30px, #ffffff 30px 36px)",
              border: "6px solid #1e4bb8",
            }}
          />
          <div
            style={{
              width: 64,
              height: 16,
              background: "#1e4bb8",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
