import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bunbury Wellness Remedial Massage - Remedial Massage & Deep Tissue Therapy",
    short_name: "Bunbury Wellness Remedial Massage",
    description:
      "Professional remedial massage, deep tissue therapy, and relaxation massage in Bunbury, WA.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3F5855",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
