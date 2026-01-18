// src/app/usePageView.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageView(apiUrl) {
  const location = useLocation();

  useEffect(() => {
    if (navigator.doNotTrack === "1") return;

    const path = `${location.pathname}${location.search}${location.hash}`;
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path,
        ua: navigator.userAgent,
        ref: document.referrer || "",
      }),
      keepalive: true,
    }).catch(() => {});
  }, [location, apiUrl]);
}
