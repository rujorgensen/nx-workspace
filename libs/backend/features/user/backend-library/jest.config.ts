/* eslint-disable */
export default {
    displayName: 'backend-features-user',
    preset: '../../../../../jest.preset.js',
    globals: {},
    testEnvironment: 'node',
    transform: {
        '^.+\\.[tj]s$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
            },
        ],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory:
        '../../../../../coverage/libs/backend/features/user/backend-library',
};
