const { composePlugins, withNx } = require('@nx/rspack');

module.exports = composePlugins(withNx(), (config) => {
    return {
        ...config,
        ignoreWarnings: [
            // Disable non-critical warnings for a prettier output:
            /HarmonyLinkingWarning/, warning => false,
            /Critical dependency/, warning => false,
        ],
    };
});
