import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-standalone-component-with-input',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './standalone-component-with-input.component.html',
    styleUrls: ['./standalone-component-with-input.component.scss']
})
export class StandaloneComponentWithInputComponent {
    @Input()
    public numberList!: number[];
}
