const withCSS = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images');
module.exports = withCSS(withOptimizedImages({
    cssModules: false,
    webpack(config, options) {
    
      return config;
    }
  }));
