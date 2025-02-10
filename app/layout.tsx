import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "쓸데없지만 멋진 스노우볼 - 아름다운 눈 내림 경험",
  description:
    "딱히 쓸데는 없지만 멋진 스노우볼을 보면서 잠시나마 휴식을 취하고 겨울을 느껴보세요. 클릭하면 스노우볼의 눈송이가 흩날립니다!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
