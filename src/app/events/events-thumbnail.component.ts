import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { IEvent } from './shared/index';


@Component( {
    selector: 'event-thumbnail',
    templateUrl: './events-thumbnail-component.html',
    styleUrls: ['./events-thumbnail-component.css']

})
export class EventsThumbnailComponent {
    @Input() event: IEvent;

    getStartTimeClass() {
        if(this.event && this.event.time === '8:00 am')
            return ['green', 'bold'];
        return [];
    }
}