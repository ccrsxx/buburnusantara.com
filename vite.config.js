/** @type {import('vite').UserConfig} */
import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  server: {
    port: 80
  },
  plugins: [tsconfigPaths()]
};
