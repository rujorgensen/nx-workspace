import { ComponentFixture } from '@angular/core/testing';
import { MountConfig, mount } from 'cypress/angular';
import { ClassicComponentWithInputComponent } from './classic-component-with-input.component';

describe(ClassicComponentWithInputComponent.name, () => {
    const config: MountConfig<ClassicComponentWithInputComponent> = {
        declarations: [],
        imports: [],
        providers: []
    }
    let component: ClassicComponentWithInputComponent;
    let fixture: ComponentFixture<ClassicComponentWithInputComponent>;

    beforeEach((done) => {
        mount(ClassicComponentWithInputComponent, {
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

    it('counts input changes', () => {
        component.numberList = [1, 2, 3, 4];
        fixture.detectChanges();

        component.numberList = [1, 2, 3];
        fixture.detectChanges();

        cy
            .get('[cy-data-id="el-change-count"]')
            .should('have.text', '2')
            ;
    })
})
