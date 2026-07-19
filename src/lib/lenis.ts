import type Lenis from "lenis";

/**
 * Lenis singleton.
 *
 * SmoothScrollProvider registers the active instance here on mount and clears
 * it on unmount. Everything else (in-app ScrollLink, GoToTop) reads from here
 * so there is exactly ONE scroll driver on the page. Mixing Lenis with
 * `window.scrollTo` / `react-scroll` causes the two to fight and produce jank.
 */
let lenisInstance: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {
  lenisInstance = instance;
};

export const getLenis = () => lenisInstance;

/**
 * Scroll to an element by id (e.g. "contact"). Uses Lenis when available,
 * accounting for the fixed navbar height. Falls back to native scroll.
 */
export const scrollToSection = (id: string, offset = -72) => {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

/** Scroll back to the top of the document. */
export const scrollToTop = () => {
  if (typeof window === "undefined") return;
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: false });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
