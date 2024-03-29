//  ✅ Does not fail
// import { getGreeting } from '../support/app.po';  

// ❌ Fails (seems to be OK after migrating to `badeball/cypress-cucumber-preprocessor`)
import { getGreeting } from '@frontend/testing/cy/page-objects';

describe('angular-app', () => {
    beforeEach(() => cy.visit('/'));

    it('should display welcome message', () => {
        // Custom command example, see `../support/commands.ts` file
        cy.login('my-email@something.com', 'myPassword');

        // Function helper example, see `../support/app.po.ts` file
        getGreeting().contains('Welcome to angular-app!');
    });
});
