import { MountConfig, mount } from 'cypress/angular';
import { ClassicComponentWithInputComponent } from './classic-component-with-input.component';

describe(ClassicComponentWithInputComponent.name, () => {
    const config: MountConfig<ClassicComponentWithInputComponent> = {
        declarations: [],
        imports: [],
        providers: []
    }

    it('detects input changes', () => {
        mount(ClassicComponentWithInputComponent, {
            ...config,
        })
            .then((instance) => {
                const component = instance.fixture.componentInstance;

                // * Assertion #1
                component.numberList = [1, 2, 3, 4];
                instance.fixture.detectChanges();

                cy
                    .get('[cy-data-id="el-number-list"]')
                    .should('have.text', '1,2,3,4')
                    .then(() => {

                        // * Assertion #2
                        component.numberList = [];
                        instance.fixture.detectChanges();

                        cy
                            .get('[cy-data-id="el-number-list"]')
                            .should('have.text', '');
                    });
            });
    })
})
