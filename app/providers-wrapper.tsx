"use client";

import { Providers } from "./providers";

export function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      {children}
    </Providers>
  );
}
