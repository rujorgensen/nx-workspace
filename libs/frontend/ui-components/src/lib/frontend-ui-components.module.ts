import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleClassicComponentComponent } from './simple-classic-component/simple-classic-component.component';

@NgModule({
    declarations: [
        SimpleClassicComponentComponent,
    ],
    exports: [
        SimpleClassicComponentComponent,
    ],
    imports: [
        CommonModule
    ],
})
export class FrontendUiComponentsModule { }
