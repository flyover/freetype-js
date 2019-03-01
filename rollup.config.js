import commonjs from 'rollup-plugin-commonjs';
import builtins from "rollup-plugin-node-builtins";
import typescript from "rollup-plugin-typescript2";

const plugins = [
  typescript({
    clean: true,
    tsconfigOverride: {
      compilerOptions: {
        target: "ES2015",
        module: "ES2015"
      }
    }
  }),
  commonjs({
    namedExports: {
      "bind-freetype.js": [ "bind" ]
    }
  }),
  builtins(),
];

export default [
  {
    input: "freetype.ts",
    output: {
      file: "dist/freetype.umd.js",
      name: "FT",
      format: "umd",
      exports: "named"
    },
    plugins: plugins
  }
];
