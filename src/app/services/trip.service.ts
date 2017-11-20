import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/find';

import { Trip } from '../models/trip';
import { TripFind } from '../models/trip-find';

@Injectable()
export class TripService {

    tripApiUrl: string = 'api/trips';

    constructor(private http: HttpClient) {}

    getTrips(): Observable<Trip[]> {
        return this.http.get<Trip[]>(this.tripApiUrl);
    }

    getTrip({ bookingCode, familyName }: TripFind): Observable<Trip> {
        const url = `${this.tripApiUrl}/?bookingCode=${bookingCode}`;

        return this.http.get<Trip>(url)
            .find((trips) => {
                const trip = trips[0];
                if (trip === undefined) {
                    return false;
                }
                return trip.bookingCode === bookingCode &&
                    trip.passengers.lastName.toLowerCase() === familyName.toLowerCase();
            });
    }
}
