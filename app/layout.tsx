import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";
import CustomNavbar from "@/components/navbar";
import { Footer } from "@/components/footer";

import { ProvidersWrapper } from "./providers-wrapper";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Fabio Tavernini</title>
        <meta content="My personal Website" name="description" />
      </head>

      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ProvidersWrapper>
          <div className="relative flex flex-col min-h-screen">
            <CustomNavbar />

            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>

            <Footer />
          </div>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
