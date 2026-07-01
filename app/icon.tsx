import { ImageResponse } from "next/og";

export const alt = "Gihansa Senukie portfolio icon";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0A0A0F",
          color: "#6366F1",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 24,
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        G
      </div>
    ),
    {
      ...size,
    },
  );
}
