import { Component } from '@angular/core';

@Component({
	selector: 'trip-find',
	templateUrl: './trip-find.component.html',
	styleUrls: ['./trip-find.component.css']
})
export class TripFindComponent {
	checkIn = 'check-in';
	title = 'Retrieve Your Booking';
	description = 'You can find your booking by filling out our family name and the booking code in your booking confirmation.';
}
