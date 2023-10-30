import commonjs from 'rollup-plugin-commonjs';
import tsPlugin from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import image from 'rollup-plugin-image';
import { terser } from 'rollup-plugin-terser';
import svgr from '@svgr/rollup';

export default {
    
  input: 'src/index.tsx',  // Entry point for your library
  output: [
    {
        format: 'esm',  // Output format
        file: 'dist/index.js',
    },
    {
        format: 'cjs',
        file: 'dist/cjs/index.js', 
    },
    {
        format: 'umd',
        file: 'dist/umd/index.js', 
       // "You must supply 'output.name' for UMD bundles that have exports so that the exports are accessible in environments without a module loader," 
        name: 'library', // Provide a name for your UMD bundle
    }
],
  plugins: [
    resolve(),            // Resolve node_modules dependencies
    commonjs(),           // Convert CommonJS modules to ES6
    terser(),             // Minify the code (for production builds)
    tsPlugin(),
    css({ output: 'index.css' }), // Specify the correct output path
    image(),
    svgr(), // SVGR plugin
  ],
  external: ['react', 'react-dom'], // Specify external dependencies
};
