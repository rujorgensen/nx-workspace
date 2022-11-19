import { TestBed } from '@angular/core/testing';
import { MountConfig } from 'cypress/angular';
import { SimpleClassicComponentComponent } from './simple-classic-component.component';

describe(SimpleClassicComponentComponent.name, () => {
    const config: MountConfig<SimpleClassicComponentComponent> = {
        declarations: [],
        imports: [],
        providers: [],
    };

    it('renders', () => {
        TestBed.overrideComponent(SimpleClassicComponentComponent, { add: { providers: config.providers } });
        cy.mount(SimpleClassicComponentComponent, config);
    });
});
