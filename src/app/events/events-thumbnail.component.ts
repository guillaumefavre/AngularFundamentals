import { Component, Input, Output, EventEmitter  } from '@angular/core'


@Component( {
    selector: 'event-thumbnail',
    templateUrl: './events-thumbnail-component.html',
    styleUrls: ['./events-thumbnail-component.css']

})
export class EventsThumbnailComponent {
    @Input() event: any;

    logFoo() {
        console.log('Foooo');
    }
}