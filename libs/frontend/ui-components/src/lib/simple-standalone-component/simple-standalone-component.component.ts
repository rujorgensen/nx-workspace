import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StandalonePipe } from '@frontend/pipes';

@Component({
    selector: 'app-simple-standalone-component',
    standalone: true,
    imports: [
        CommonModule,
        StandalonePipe,
    ],
    templateUrl: './simple-standalone-component.component.html',
    styleUrls: ['./simple-standalone-component.component.scss']
})
export class SimpleStandaloneComponentComponent { }
