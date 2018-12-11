const pkg = require('./package.json');

module.exports = {
  version: () => console.log(`${pkg.name} v${pkg.version}`),
  feature1: () => 'feature1',
  feature2: () => 'feature2',
  feature3: () => 'feature3',
  feature4: () => 'feature4',
  feature5: () => 'feature5',
  feature6: () => 'feature6',
};
