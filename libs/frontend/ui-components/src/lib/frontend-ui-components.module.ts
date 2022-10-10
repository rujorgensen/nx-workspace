import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleClassicComponentComponent } from './simple-classic-component/simple-classic-component.component';
import { ClassicComponentWithInputComponent } from './classic-component-with-input/classic-component-with-input.component';

@NgModule({
    declarations: [
        SimpleClassicComponentComponent,
        ClassicComponentWithInputComponent,
    ],
    exports: [
        SimpleClassicComponentComponent,
        ClassicComponentWithInputComponent,
    ],
    imports: [
        CommonModule
    ],
})
export class FrontendUiComponentsModule { }
