import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-simple-standalone-component',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './simple-standalone-component.component.html',
    styleUrls: ['./simple-standalone-component.component.css']
})
export class SimpleStandaloneComponentComponent {

}
