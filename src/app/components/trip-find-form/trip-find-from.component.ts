import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { TripFind } from '../../models/trip-find';
import { Trip } from '../../models/trip';
import { TripService } from '../../services/trip.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'trip-find-form',
    templateUrl: 'trip-find-form.component.html',
    styleUrls: ['trip-find-form.component.css'],
})
export class TripFindFormComponent implements OnInit {

    tripFindForm: FormGroup;
    trip: Trip;

    constructor(private builder: FormBuilder, private tripService: TripService) { }

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
        const { status, value } = this.tripFindForm;
        const { bookingCode, familyName } = value;

        if (status === 'VALID') {
            this.findTrip(value);
        } else {
            // TODO: Show what's wrong
        }
    }

    findTrip(tripFind: TripFind):void {
        this.tripService.getTrip(tripFind)
            .subscribe((trip) => this.trip = trip[0]);
    }
}
