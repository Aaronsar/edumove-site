import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

// Brand colors (cf. MEMORY.md)
const COLORS = {
  darkBlue: "#1B1D3A",
  darkBlueLight: "#2A2D5C",
  orange: "#EC680A",
  purple: "#615CA5",
  white: "#FFFFFF",
  mutedWhite: "rgba(255, 255, 255, 0.7)",
  badgeBg: "rgba(236, 104, 10, 0.15)",
  badgeBorder: "rgba(236, 104, 10, 0.5)",
};

// Satori (used by next/og) only supports TTF/OTF, not woff2.
// We fetch raw TTF files from the official Google Fonts GitHub repo.
const POPPINS_TTF: Record<number, string> = {
  400: "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Regular.ttf",
  500: "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Medium.ttf",
  700: "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Bold.ttf",
};

async function loadPoppins(weight: 400 | 500 | 700): Promise<ArrayBuffer> {
  const url = POPPINS_TTF[weight];
  if (!url) throw new Error(`Unsupported weight: ${weight}`);
  const res = await fetch(url, { cache: "force-cache" });
  if (!res.ok) throw new Error(`Failed to load Poppins ${weight}: ${res.status}`);
  return res.arrayBuffer();
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const rawTitle = searchParams.get("title");
    const rawSubtitle = searchParams.get("subtitle");
    const rawTag = searchParams.get("tag");

    const title = (rawTitle ?? "Études de santé en Europe").slice(0, 130);
    const subtitle = (rawSubtitle ?? "Médecine, dentaire, kiné, pharmacie, vétérinaire en Espagne et Italie").slice(0, 180);
    const tag = (rawTag ?? "100% gratuit").slice(0, 32);

    // Adaptive title size based on length
    const titleSize = title.length > 90 ? 56 : title.length > 60 ? 64 : 72;

    const [poppinsBold, poppinsRegular, poppinsMedium] = await Promise.all([
      loadPoppins(700),
      loadPoppins(400),
      loadPoppins(500),
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            background: `linear-gradient(135deg, ${COLORS.darkBlue} 0%, ${COLORS.darkBlueLight} 100%)`,
            position: "relative",
            fontFamily: "Poppins",
          }}
        >
          {/* Orange accent strip top */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 8,
              background: COLORS.orange,
            }}
          />

          {/* Decorative purple blob top-right */}
          <div
            style={{
              position: "absolute",
              top: -120,
              right: -120,
              width: 360,
              height: 360,
              borderRadius: 9999,
              background: COLORS.purple,
              opacity: 0.25,
              filter: "blur(40px)",
            }}
          />

          {/* Decorative orange blob bottom-left */}
          <div
            style={{
              position: "absolute",
              bottom: -140,
              left: -140,
              width: 380,
              height: 380,
              borderRadius: 9999,
              background: COLORS.orange,
              opacity: 0.18,
              filter: "blur(50px)",
            }}
          />

          {/* Main content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "70px 80px",
              flex: 1,
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            {/* Top: logo + tag */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Logo wordmark */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: COLORS.orange,
                    fontSize: 32,
                    fontWeight: 700,
                    color: COLORS.white,
                  }}
                >
                  e
                </div>
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: COLORS.white,
                    letterSpacing: -1,
                  }}
                >
                  edumove
                </div>
              </div>

              {/* Tag pill */}
              {tag && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 22px",
                    borderRadius: 9999,
                    background: COLORS.badgeBg,
                    border: `2px solid ${COLORS.badgeBorder}`,
                    color: COLORS.orange,
                    fontSize: 22,
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </div>
              )}
            </div>

            {/* Center: title + subtitle */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                marginTop: 40,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: titleSize,
                  fontWeight: 700,
                  color: COLORS.white,
                  lineHeight: 1.1,
                  letterSpacing: -1.5,
                  maxWidth: 1040,
                }}
              >
                {title}
              </div>

              {subtitle && (
                <div
                  style={{
                    display: "flex",
                    fontSize: 28,
                    fontWeight: 400,
                    color: COLORS.mutedWhite,
                    lineHeight: 1.35,
                    maxWidth: 1000,
                  }}
                >
                  {subtitle}
                </div>
              )}
            </div>

            {/* Bottom: URL + accent line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 4,
                    background: COLORS.orange,
                    borderRadius: 2,
                  }}
                />
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 500,
                    color: COLORS.white,
                  }}
                >
                  edumove.fr
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  fontWeight: 400,
                  color: COLORS.mutedWhite,
                }}
              >
                Espagne · Italie
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "Poppins", data: poppinsBold, style: "normal", weight: 700 },
          { name: "Poppins", data: poppinsMedium, style: "normal", weight: 500 },
          { name: "Poppins", data: poppinsRegular, style: "normal", weight: 400 },
        ],
        // Cache: 1 year on edge, browsers revalidate after 1 hour
        headers: {
          "Cache-Control": "public, immutable, no-transform, max-age=3600, s-maxage=31536000",
        },
      }
    );
  } catch (err) {
    console.error("[/api/og] Failed to generate image:", err);
    return new Response("Failed to generate image", { status: 500 });
  }
}
