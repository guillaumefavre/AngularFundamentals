import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.Service';
import { ToastrService } from '../common/toastr.service';


@Component( {
    selector: 'events-list',
    templateUrl: './events-list-component.html'

})
export class EventsListComponent implements OnInit {
    events:any[];
    constructor(private eventService: EventService, private toastrService: ToastrService) {
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}