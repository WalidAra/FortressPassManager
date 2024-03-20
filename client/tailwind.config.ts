import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        default: "3f3f46",
        primary: "#0070f0",
        secondary: "#9455d3",
        success: "#18c964",
        warning: "#f5a524",
        danger: "#f31260",

        // light theme
        whiteBoard: "#fafafa",
        hLight: "#303032",
        pLight: "#8d8d8d",
        pLight2: "#808494",
        divider: "#d6ddeb",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
