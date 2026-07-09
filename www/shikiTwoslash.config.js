// @ts-check
const ts = require('typescript');

module.exports = {
  themes: ['min-light', 'github-dark'],
  defaultCompilerOptions: {
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    noUncheckedSideEffectImports: false,
  },
};
