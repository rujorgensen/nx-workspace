const { getJestProjects } = require('@nrwl/jest');

export default {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/angular-app',
    '<rootDir>/apps/api',
  ],
};
