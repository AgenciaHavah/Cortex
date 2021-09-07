import { Error } from 'sequelize/types';

import User from '../models/User';
import Course from '../models/Course';
import { UserInterface } from '../types/Entities';

export default class DataService {
    index = (): Promise<User[]> =>
        new Promise((resolve, reject) =>
            User.findAll()
                .then((response) => resolve(response))
                .catch((error: Error) => reject(error)),
        );

    createUser = (data: UserInterface): Promise<User> =>
        new Promise((resolve, reject) =>
            User.create(data)
                .then((response) => resolve(response))
                .catch((error: Error) => reject(error)),
        );

    courses = (): Promise<Course[]> =>
        new Promise((resolve, reject) =>
            Course.findAll()
                .then((response) => resolve(response))
                .catch((error: Error) => reject(error)),
        );

    getCourse = (slug: string): Promise<Course> =>
        new Promise((resolve, reject) =>
            Course.findOne({
                where: {
                    slug,
                },
            })
                .then((response) => resolve(response))
                .catch((error: Error) => reject(error)),
        );
}
