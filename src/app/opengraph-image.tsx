import { ImageResponse } from "next/og";

export const alt =
  "Frisco Barber Shop in Frisco, TX — men’s haircuts. Call 972-335-9104.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#2f2f2f",
          padding: 18,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "#ffffff",
            padding: "48px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 800,
              color: "#c51d2e",
              letterSpacing: 1,
              lineHeight: 1.05,
            }}
          >
            FRISCO BARBER SHOP
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontStyle: "italic",
              color: "#1e4bb8",
              marginTop: 18,
              lineHeight: 1.3,
            }}
          >
            Gentleman’s Choice of Style · Cut to Approval · Men & Boys
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#1a1a1a",
              marginTop: 22,
              lineHeight: 1.35,
            }}
          >
            6201 Technology Dr #114 · Frisco, TX 75033
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 800,
              color: "#c51d2e",
              marginTop: 24,
            }}
          >
            972-335-9104
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
