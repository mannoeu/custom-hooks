import typescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";
import packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [typescript({ objectHashIgnoreUnknownHack: true }), uglify()],
  external: ["react", "react-dom"],
};
