import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//  ✅ Does not fail
import { getGreeting } from '../../support/app.po';  

// ❌ Fails
// import { getGreeting } from '@frontend/testing/cy/page-objects';

// ******************************************************************************
// *** Given
// ******************************************************************************
Given('I navigate to the main page', (): void => {
    cy
        .intercept('api/*', { statusCode: 200 });

    cy
        .visit('/');
});

// ******************************************************************************
// *** And
// ******************************************************************************
When('I stick around for 100 ms', (): void => {
    cy
        .wait(100);
});

// ******************************************************************************
// *** Then
// ******************************************************************************
Then('I see a welcome message', (): void => {
    getGreeting()
        .contains('Welcome to angular-app!');
});