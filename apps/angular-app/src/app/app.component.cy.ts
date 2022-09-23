import { HttpClientModule } from '@angular/common/http';
import { mount } from 'cypress/angular';
import { AppComponent } from './app.component';

it('should work', () => {
    cy.intercept('**/api/hello', { message: 'world' });
    mount(AppComponent, { imports: [HttpClientModule] });
});