
"use client";

import { useEffect } from "react";
import AOS from "aos";

const AosInit = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        disableMutationObserver: true,
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      AOS.refreshHard();
    };
  }, []);

  return null;
};

export default AosInit;
