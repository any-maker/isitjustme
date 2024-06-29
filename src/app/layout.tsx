import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IsItJustMe",
  description: "나만 이렇게 생각하는지 다른 사람들에게 물어보자.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "32px",
          boxSizing: "border-box",
          backgroundColor: "#1A365D",
        }}
      >
        {children}
      </body>
    </html>
  );
}
