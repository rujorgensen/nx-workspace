/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimpleClassicComponentComponent } from './simple-classic-component.component';

describe('SimpleClassicComponentComponent', () => {
    let component: SimpleClassicComponentComponent;
    let fixture: ComponentFixture<SimpleClassicComponentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SimpleClassicComponentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleClassicComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
