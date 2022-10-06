import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassicPipe } from './classic.pipe';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        ClassicPipe,
    ]
})
export class FrontendPipesPipesModule { }
