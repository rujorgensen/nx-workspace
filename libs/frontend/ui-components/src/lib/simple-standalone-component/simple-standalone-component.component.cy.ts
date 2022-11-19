import { TestBed } from '@angular/core/testing';
import { MountConfig } from 'cypress/angular';
import { SimpleStandaloneComponentComponent } from './simple-standalone-component.component';

describe(SimpleStandaloneComponentComponent.name, () => {
    const config: MountConfig<SimpleStandaloneComponentComponent> = {
        declarations: [],
        imports: [],
        providers: [],
    };

    it('renders', () => {
        TestBed.overrideComponent(SimpleStandaloneComponentComponent, { add: { providers: config.providers } });
        cy
            .mount(SimpleStandaloneComponentComponent, config)
            ;
    });

    it('should contain pipe output', () => {
        TestBed.overrideComponent(SimpleStandaloneComponentComponent, { add: { providers: config.providers } });
        cy
            .mount(SimpleStandaloneComponentComponent, config)
            ;

        cy
            .get('b')
            .should('contain', 'standalone-pipe')
            ;
    });
});
