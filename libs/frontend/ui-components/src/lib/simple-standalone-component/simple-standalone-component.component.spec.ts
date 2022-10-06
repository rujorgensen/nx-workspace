/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleStandaloneComponentComponent } from './simple-standalone-component.component';

describe('SimpleStandaloneComponentComponent', () => {
    let component: SimpleStandaloneComponentComponent;
    let fixture: ComponentFixture<SimpleStandaloneComponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleStandaloneComponentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleStandaloneComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
