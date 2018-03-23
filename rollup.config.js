const pkg = require('./package.json');

const external = Object.keys(pkg.dependencies);

export default {
  input: 'src/index.js',
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
