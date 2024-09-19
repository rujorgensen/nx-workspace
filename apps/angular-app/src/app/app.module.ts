import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {
    FrontendUiComponentsModule,
    SimpleStandaloneComponentComponent,
} from '@frontend/ui-components';

@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SimpleStandaloneComponentComponent,
        FrontendUiComponentsModule,
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
    ],
})
export class AppModule { }
