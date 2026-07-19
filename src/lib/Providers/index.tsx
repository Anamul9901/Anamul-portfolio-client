"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import GoToTop from "@/src/components/GoToTop/GoToTop";
import SmoothScrollProvider from "@/src/components/Providers/SmoothScrollProvider";
import CursorSpotlight from "@/src/components/UI/CursorSpotlight";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: React.ComponentProps<typeof NextThemesProvider>;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <Toaster />
      {/* Ambient cursor halo — fixed, pointer-events:none, auto-disabled on touch/reduced-motion */}
      <CursorSpotlight />
      <NextThemesProvider {...themeProps}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </NextThemesProvider>
      <GoToTop />
    </NextUIProvider>
  );
}
