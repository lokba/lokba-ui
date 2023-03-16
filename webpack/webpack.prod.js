const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = () =>
  merge(common, {
    mode: 'production',
    devtool: false,
    optimization: {
      usedExports: true,
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'esnext',
        }),
      ],
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  });
