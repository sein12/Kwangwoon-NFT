const webpack = require('webpack');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url"),
        "fs": require.resolve("browserify-fs"),
        "path": require.resolve("path-browserify"),
        "vm": require.resolve("vm-browserify")
    };

    config.module.rules = config.module.rules.filter(rule => {
        if (rule.use) {
            return !rule.use.some(use => use.loader && use.loader.includes('source-map-loader'));
        }
        return true;
    });

    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        })
    ]);

    return config;
};
