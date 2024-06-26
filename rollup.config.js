import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      resolve({
        extensions: ['.js', '.jsx'],
      }),

      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      }),
      commonjs(),
      postcss({
        // extract: true,
        // modules: true,
        // extensions: ['.scss'],
        // use: ['sass'],
        // plugins: [autoprefixer()],
      }),
    ],
    external: ['react', 'react-dom'],
  },
];
