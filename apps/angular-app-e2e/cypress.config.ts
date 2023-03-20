// Configuration from https://github.com/badeball/cypress-cucumber-preprocessor/blob/HEAD/docs/quick-start.md
import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import * as createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

const cypressJsonConfig = {
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    video: true,
    videosFolder: '../../dist/cypress/apps/angular-app-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/angular-app-e2e/screenshots',
    specPattern: [
        '**/*.{feature,features}',
        '**/*.spec.ts',
        'src/e2e/**/*.cy.{js,jsx,ts,tsx}'
    ],
    supportFile: 'src/support/e2e.ts',
};
async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
    await addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    );

    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

export default defineConfig({
    e2e: {
        ...nxE2EPreset(__dirname),
        ...cypressJsonConfig,
        setupNodeEvents,
    },
});
