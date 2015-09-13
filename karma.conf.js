module.exports = function(config) {
    config.set({
        // ... normal karma configuration

        files: [
            'src/**/*test.js'
        ],

        preprocessors: {
            // add webpack as preprocessor
            'src/**/*.test.js': ['webpack'],
        },

        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        plugins: [
            require("karma-webpack")
        ]

    });
};
