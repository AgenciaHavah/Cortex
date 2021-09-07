/* eslint-disable @typescript-eslint/ban-types */
export interface UserInterface {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export interface TherapistInterface {
    name: string;
    email: string;
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    postalCode: string;
    coordinates: string;
}
