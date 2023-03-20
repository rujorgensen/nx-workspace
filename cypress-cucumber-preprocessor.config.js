const path = require("path");

// Slight issue; the generated Cucumber files does not end up in the correct folder (root ./cyreport). Do not know how to solve.
const outputFolder = path.resolve(process.cwd(), "../../../cyreport/cucumber-json");

module.exports = {
    nonGlobalStepDefinitions: true,
    stepDefinitions: 'src/integration',
    cucumberJson: {
        generate: true,
        outputFolder: outputFolder,
        filePrefix: "",
        fileSuffix: ".cucumber"
    }
};
