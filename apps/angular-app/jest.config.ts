/* eslint-disable */
export default {
    displayName: 'angular-app',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.config.ts'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$',
        },
    },
    coverageDirectory: '../../coverage/apps/angular-app',
    transform: { '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular' },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
    preset: '../../jest.preset.js',
};
