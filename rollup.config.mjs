import pkg from './package.json' with { type: 'json' };

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'stackTraceParser',
      file: pkg.browser,
      format: 'umd',
    },
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
