import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggler from "@/components/theme-toggler";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700', '300'] });

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
    google: "zHB4gjR-LZ7okfLYgT9olSwGCyo9geeG3Ky4RUpnr1k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggler />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
