import type { Metadata } from "next";
import localFont from "next/font/local";
// import "./globals.css";
import "./styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Uday Biradar - Portfolio",
  description: "Explore my journey as a software engineer.",
  openGraph: {
    title: "Uday Biradar - Portfolio",
    description: "Explore my journey as a software engineer.",
    url: "https://udaybiradar.com",
    siteName: "Uday Biradar",
    // images: [
    //   {
    //     url: "", // Replace with the correct path to your thumbnail image
    //     width: 1200,
    //     height: 630,
    //     alt: "Uday Biradar Portfolio Thumbnail",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Uday Biradar - Portfolio" />
        <meta
          property="og:description"
          content="Explore my journey as a software engineer."
        />
        <meta property="og:url" content="https://udaybiradar.com" />
        {/* <meta property="og:image" content="https://udaybiradar.com/path-to-thumbnail.jpg" /> */}
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
