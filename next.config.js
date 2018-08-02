const withCSS = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images');
module.exports = withCSS({
    cssModules: false,
    webpack(config, options) {
    
      return config;
    }
  },withOptimizedImages({
    // these are the default values so you don't have to provide them if they are good enough for your use-case.
    // but you can overwrite them here with any valid value you want.
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    optimizeImagesInDev: false,
    mozjpeg: {
        quality: 80,
    },
    optipng: {
        optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
        interlaced: true,
        optimizationLevel: 3,
    },
    svgo: {
        // enable/disable svgo plugins here
    },
    webp: {
        preset: 'default',
        quality: 75,
    },
}));
