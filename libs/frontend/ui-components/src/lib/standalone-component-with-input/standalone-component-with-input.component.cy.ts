import { ComponentFixture } from '@angular/core/testing';
import { MountConfig, mount } from 'cypress/angular';
import { StandaloneComponentWithInputComponent } from './standalone-component-with-input.component';

describe(StandaloneComponentWithInputComponent.name, () => {
    const config: MountConfig<StandaloneComponentWithInputComponent> = {
        declarations: [],
        imports: [],
        providers: []
    }
    let component: StandaloneComponentWithInputComponent;
    let fixture: ComponentFixture<StandaloneComponentWithInputComponent>;

    beforeEach((done) => {
        mount(StandaloneComponentWithInputComponent, {
            ...config,
        })
            .then((instance) => {
                component = instance.fixture.componentInstance;
                fixture = instance.fixture;
                fixture.detectChanges();
                done();
            })
            ;
    });

    it('renders', () => {
        mount(StandaloneComponentWithInputComponent, config);
    })

    it('detects input changes', () => {
        // * Act #1
        component.numberList = [1, 2, 3, 4];
        fixture.detectChanges();

        cy
            // * Assertion #1
            .get('[cy-data-id="el-number-list"]')
            .should('have.text', '1,2,3,4')
            .then(() => {
                // * Act #2
                component.numberList = [1, 2, 3];
                fixture.detectChanges();
            })

            // * Assertion #2
            .get('[cy-data-id="el-number-list"]')
            .should('have.text', '1,2,3')
            ;
    })
})
