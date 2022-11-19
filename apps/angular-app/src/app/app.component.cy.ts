import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

it('should work', () => {
    cy.intercept('**/api/hello', { message: 'world' });
    TestBed
        .overrideComponent(AppComponent, { add: {} })
        ;

    cy
        .mount(AppComponent, { imports: [HttpClientModule] })
        ;
});
