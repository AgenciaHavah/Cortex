import { Error } from 'sequelize/types';

import Country from '../models/Country';
import Location from '../models/Location';
import Therapist from '../models/Therapist';
import TherapistMessage from '../models/TherapistMessage';

export default class DataService {
    index = (): Promise<Therapist[]> =>
        new Promise((resolve, reject) =>
            Therapist.findAll({ include: [Location] })
                .then((response) => resolve(response))
                .catch((error: Error) => reject(error)),
        );

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    createTherapistMessage = (data): Promise<TherapistMessage> =>
        new Promise((resolve, reject) =>
            TherapistMessage.create(data)
                .then((response) => resolve(response))
                .catch((error: Error) => reject(error)),
        );

    getCountries = (): Promise<Country[]> =>
        new Promise((resolve, reject) =>
            Country.findAll({ include: [Location] })
                .then((response) => resolve(response))
                .catch((error: Error) => reject(error)),
        );

    getLocations = (): Promise<Location[]> =>
        new Promise((resolve, reject) =>
            Location.findAll()
                .then((response) => resolve(response))
                .catch((error: Error) => reject(error)),
        );
}
