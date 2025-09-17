"use client";

import { useEffect } from "react";

export default function PerformanceOptimization() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement("link");
      fontLink.rel = "preload";
      fontLink.href = "/fonts/geist-sans.woff2";
      fontLink.as = "font";
      fontLink.type = "font/woff2";
      fontLink.crossOrigin = "anonymous";
      document.head.appendChild(fontLink);

      // Preload critical images
      const imageLink = document.createElement("link");
      imageLink.rel = "preload";
      imageLink.href = "/og-image.jpg";
      imageLink.as = "image";
      document.head.appendChild(imageLink);
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        // Add loading="lazy" to non-critical images
        if (!img.hasAttribute("loading")) {
          img.setAttribute("loading", "lazy");
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute("decoding")) {
          img.setAttribute("decoding", "async");
        }
      });
    };

    // Add resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://www.google-analytics.com",
        "https://www.googletagmanager.com",
      ];

      dnsPrefetchDomains.forEach((domain) => {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = domain;
        document.head.appendChild(link);
      });

      // Preconnect to critical third-party origins
      const preconnectDomains = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
      ];

      preconnectDomains.forEach((domain) => {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = domain;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    addResourceHints();

    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
    };
  }, []);

  return null; // This component doesn't render anything
}
