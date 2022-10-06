import { MountConfig, mount } from 'cypress/angular';
import { SimpleStandaloneComponentComponent } from './simple-standalone-component.component';

describe(SimpleStandaloneComponentComponent.name, () => {
    const config: MountConfig<SimpleStandaloneComponentComponent> = {
        declarations: [],
        imports: [],
        providers: []
    }

    it('renders', () => {
        mount(SimpleStandaloneComponentComponent, config);
    })

    it('should contain pipe output', () => {
        mount(SimpleStandaloneComponentComponent, config);

        cy.get('b')
            .should('contain', 'standalone-pipe');
    })
})
