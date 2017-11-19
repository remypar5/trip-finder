import { Component, OnInit, Input } from "@angular/core";

import { Trip } from "../../models/trip";

@Component({
    selector: 'trip-viewer',
    templateUrl: './trip-viewer.component.html',
    styleUrls: ['./trip-viewer.component.css'],
})
export class TripViewerComponent implements OnInit {

    @Input() trip: Trip;

    ngOnInit() {
        //
    }
}
