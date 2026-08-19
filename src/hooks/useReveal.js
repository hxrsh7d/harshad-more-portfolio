import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class to an element when it scrolls into view.
 * Pair with the `.reveal` CSS class. Respects prefers-reduced-motion by
 * simply revealing everything immediately (handled via CSS transition-duration).
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
