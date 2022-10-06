import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
    FrontendUiComponentsModule,
    SimpleStandaloneComponentComponent,
} from '@frontend/ui-components';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SimpleStandaloneComponentComponent,
        FrontendUiComponentsModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
