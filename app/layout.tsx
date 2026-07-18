import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sourav Khanna — Senior Site Reliability Engineer",
  description:
    "Sourav Khanna, Senior Site Reliability Engineer at Netcore Cloud, Kolkata. Infrastructure, automation, and incident response.",
  metadataBase: new URL("https://sourav1998.github.io"),
  openGraph: {
    title: "Sourav Khanna — Senior Site Reliability Engineer",
    description:
      "Senior Site Reliability Engineer at Netcore Cloud, Kolkata. Infrastructure, automation, and incident response.",
    url: "https://sourav1998.github.io",
    siteName: "Sourav Khanna",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
