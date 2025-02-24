import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
    fontSize: {
      "post-title": [
        "2.75rem",
        {
          lineHeight: "1.5",
          letterSpacing: "-0.004em",
          fontWeight: "700",
        },
      ],
      "post-context-on-markdown": ["18px"],
      "post-title-on-list": [
        "1rem",
        {
          lineHeight: "1.5",
        },
      ],
      "post-description-on-list": [
        "14px",
        {
          lineHeight: "1.5",
        },
      ],
      "post-info-on-list": ["12px"],
      pagination: ["14px"],
    },
  },
  plugins: [],
};
export default config;
