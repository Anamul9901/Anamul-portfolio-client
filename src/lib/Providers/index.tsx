"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import GoToTop from "@/src/components/GoToTop/GoToTop";
import SmoothScrollProvider from "@/src/components/Providers/SmoothScrollProvider";
import SplashCursor from "@/src/components/UI/SplashCursor";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: React.ComponentProps<typeof NextThemesProvider>;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <Toaster />
      {/* WebGL fluid paint-trail cursor. Fixed, pointer-events:none, auto-disabled
          on touch devices + prefers-reduced-motion. Tuned to the ember accent. */}
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#F59E0B"
      />
      <NextThemesProvider {...themeProps}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </NextThemesProvider>
      <GoToTop />
    </NextUIProvider>
  );
}
