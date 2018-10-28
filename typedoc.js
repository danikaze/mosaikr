const info = require('./package.json');

module.exports = {
  mode: 'modules',
  module: 'umd',
  excludePrivate: true,
  excludeNotExported: true,
  hideGenerator: true,
  name: `${info.name} ${info.version}`,
  readme: 'none',
  theme: 'markdown',
  out: './docs',
};
