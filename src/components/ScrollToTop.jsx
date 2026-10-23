import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const main = document.getElementById("main");
    main?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}
