import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-classic-component-with-input',
    templateUrl: './classic-component-with-input.component.html',
    styleUrls: ['./classic-component-with-input.component.scss']
})
export class ClassicComponentWithInputComponent {
    @Input()
    public numberList!: number[];
}
