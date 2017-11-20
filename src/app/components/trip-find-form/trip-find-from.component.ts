import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { TripFind } from '../../models/trip-find';
import { Trip } from '../../models/trip';
import { TripService } from '../../services/trip.service';

@Component({
    selector: 'trip-find-form',
    templateUrl: 'trip-find-form.component.html',
    styleUrls: ['trip-find-form.component.css'],
})
export class TripFindFormComponent implements OnInit {

    checkIn = 'check-in';
    title = 'Retrieve Your Booking';
    description = 'You can find your booking by filling out our family name and the booking code in your booking confirmation.';

    isLoading: boolean = false;
    isFormSubmitted: boolean = false;
    isTripFound: boolean = false;

    tripFindForm: FormGroup;
    trip: Trip;

    constructor(
        private builder: FormBuilder,
        private tripService: TripService,
        private router: Router
    ) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.tripFindForm = this.builder.group({
            bookingCode: ['PZIGZ3', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(6),
                Validators.pattern(/^[A-Z2-9]*$/i)
            ]],
            familyName: ['HESP', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(30),
                Validators.pattern(/^[ A-Z]*$/i)
            ]]
        });
    }

    handleSubmitForm() {
        const { valid, value } = this.tripFindForm;
        const { bookingCode, familyName } = value;

        if (valid) {
            this.isFormSubmitted = true;
            this.findTrip(value);
        } else {
            // TODO: Show what's wrong
        }
    }

    findTrip(tripFind: TripFind):void {
        this.isLoading = true;
        this.tripService.getTrip(tripFind)
            .subscribe((trip) => {
                this.isLoading = false;
                if (Array.isArray(trip) && trip.length === 1) {
                    this.isTripFound = true;
                    trip = trip[0];
                } else {
                    // TODO: Show 404 message
                    this.isTripFound = false;
                    trip = undefined;
                }
                this.trip = trip;
            });
    }
}
