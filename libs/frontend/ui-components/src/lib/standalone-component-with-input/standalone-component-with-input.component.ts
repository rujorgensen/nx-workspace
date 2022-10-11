import { Component, Input, OnChanges } from '@angular/core';
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
export class StandaloneComponentWithInputComponent implements OnChanges {
    @Input()
    public numberList!: number[];

    public __changesDetected: number = 0;

    public ngOnChanges(

    ): void {
        this.__changesDetected++;
    }
}
