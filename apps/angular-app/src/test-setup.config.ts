import 'jest-preset-angular/setup-jest';
import 'jest-extended';

// Mock console so failed tests can easily be read
global.console.warn = jest.fn();
global.console.debug = jest.fn();
global.console.error = jest.fn();
global.console.log = jest.fn();
