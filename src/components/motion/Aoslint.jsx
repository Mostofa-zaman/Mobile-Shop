"use client";

import { useEffect } from "react";
import AOS from "aos";

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      disableMutationObserver: true,
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return null;
};

export default AosInit;