import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      color: {
        primary: "var(--text-primary)",
      },
      fontSize: {
        "markdown-title": [
          "2.75rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.004em",
            fontWeight: "700",
          },
        ],
        "markdown-content": ["18px"],
      },
    },
  },
  plugins: [],
};
export default config;
