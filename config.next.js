module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
  
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[local]___[hash:base64:5]'
  },
  webpack: (config, { dev }) => {
    if (!config.plugins) config.plugins = [];
    config.plugins.push(
      new TypedCssModulesPlugin({
        globPattern: 'components/**/*.scss',
      }),
    )
    return config;
  }
});
