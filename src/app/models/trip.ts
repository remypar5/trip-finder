class Passengers {
    id: number;
    firstName: string;
    lastName: string;
    title: object;
}

export class Trip {
    bookingCode: string;
    contactDetails: object[];
    itinerary: object;
    passengers: Passengers;
}
