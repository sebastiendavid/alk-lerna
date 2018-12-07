const pkg = require('./package.json');

module.exports = {
  version: () => console.log(`${pkg.name} v${pkg.version}`);
  feature1: () => 'feature1'
}