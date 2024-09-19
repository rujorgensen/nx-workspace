import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@happynrwl/api-interfaces';

interface ISomeObject {
    thisIsAlwaysThere: { str: string };
}

@Component({
    selector: 'happynrwl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    hello$ = this.http.get<Message>('/api/hello');
    protected someObject: ISomeObject = {
        thisIsAlwaysThere: { str: 'Here I am' },
    }

    constructor(
        private http: HttpClient,
    ) { }
}
