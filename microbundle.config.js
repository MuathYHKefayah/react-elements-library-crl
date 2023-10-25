// microbundle.config.js
import styles from 'rollup-plugin-styles';

export default {
    input: 'src/index.tsx',
    output: {
      format: ['cjs', 'esm', 'umd'],  // Output formats
      dir: 'dist',  // Output directory
    },
    minify: true,  // Enable minification for production builds
    declaration: true,  // Generate TypeScript declarations
    plugins: [
      styles({
        // Specify the CSS file to be handled
        mode: 'inject',      // Inject the CSS into the bundle
        modules: true,
        include: [
          'node_modules/react-toastify/dist/ReactToastify.css',
          // Add other CSS files to be handled here
        ],
      }),
    ],
    external: ['react', 'react-dom'], // Specify external dependencies
  };