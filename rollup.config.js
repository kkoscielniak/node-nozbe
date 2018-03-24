import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);

export default {
  input: 'src/index.js',
  plugins: [
    resolve({
      module: true,
      jsnext: true,
      main: true,
    }),
    commonjs(),
    uglify(),
  ],
  external,
  exports: 'named',
  globals: {},
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'all-log',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
};
