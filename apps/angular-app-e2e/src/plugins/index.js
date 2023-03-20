const { preprocessTypescript } = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
    on('file:preprocessor', preprocessTypescript(config));
};
