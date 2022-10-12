import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-classic-component-with-input',
    templateUrl: './classic-component-with-input.component.html',
    styleUrls: ['./classic-component-with-input.component.scss'],
})
export class ClassicComponentWithInputComponent implements OnChanges {
    @Input()
    public numberList!: number[];

    public __changesDetected: number = 0;

    public ngOnChanges(

    ): void {
        this.__changesDetected++;
    }
}
