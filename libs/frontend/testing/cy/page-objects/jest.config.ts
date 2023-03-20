/* eslint-disable */
export default {
    displayName: 'frontend-testing-cy-page-objects',
    preset: '../../../../../jest.preset.js',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            { tsconfig: '<rootDir>/tsconfig.spec.json' },
        ],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory:
        '../../../../../coverage/libs/frontend/testing/cy/page-objects',
};
