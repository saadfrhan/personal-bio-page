import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

const shortInfo = {
  title: "Saad Farhan",
  description:
    "I like Next.js. Currently building Next.js projects, exploring FastAPI and CLI stuff. Always up for learning new things!",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://saadfarhan-bio.vercel.app"),
  title: shortInfo.title,
  description: shortInfo.description,
  openGraph: {
    title: shortInfo.title,
    description: shortInfo.description,
    url: "https://saadfarhan-bio.vercel.app",
    siteName: shortInfo.title,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: shortInfo.title,
    card: "summary_large_image",
  },
  verification: {
    google: "98alH-ks_u8FNSs8yttV6lPbFqfPbRl9zyJ0HQxUtVo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
