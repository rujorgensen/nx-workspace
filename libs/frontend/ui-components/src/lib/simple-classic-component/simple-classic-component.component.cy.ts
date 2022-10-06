import { MountConfig, mount } from 'cypress/angular';
import { SimpleClassicComponentComponent } from './simple-classic-component.component';

describe(SimpleClassicComponentComponent.name, () => {
    const config: MountConfig<SimpleClassicComponentComponent> = {
        declarations: [],
        imports: [],
        providers: []
    }

    it('renders', () => {
        mount(SimpleClassicComponentComponent, config);
    })
})
