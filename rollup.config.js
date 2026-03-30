import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "default",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: [
        ["@babel/preset-env", { targets: "> 0.25%, not dead" }],
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
      extensions: [".js", ".jsx"],
      exclude: "node_modules/**",
    }),
    resolve({ extensions: [".js", ".jsx"] }),
    commonjs(),
    terser(),
  ],
};
