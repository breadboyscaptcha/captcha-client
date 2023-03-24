import type { Config } from "tailwindcss";
import { PRIMARY_COLOR } from "./config/setup";
import { getColors } from "theme-colors";

export default <Partial<Config>> {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: getColors(PRIMARY_COLOR),
      },
    },
  },
};
