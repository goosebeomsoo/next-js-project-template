import { defineConfig } from "@pandacss/dev";
import globalCss from "./app/styles/globalStyles";

export default defineConfig({
  preflight: true,
  // no using .src
  include: ["./pages/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],
  exclude: [],
  jsxFramework: "react",
  outdir: "styled-system",
  globalCss,
});
