import { Component, Input } from '@angular/core';

import { Trip } from '../../models/trip';

@Component({
    selector: 'trip-viewer',
    templateUrl: './trip-viewer.component.html',
    styleUrls: ['./trip-viewer.component.css'],
})
export class TripViewerComponent {
    @Input() trip: Trip;
}
