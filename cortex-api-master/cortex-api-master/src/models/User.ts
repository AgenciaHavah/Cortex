import { Table, Model, Column, AllowNull } from 'sequelize-typescript';

// Types
import { UserInterface } from '../types/Entities';

@Table({ tableName: 'users' })
export default class User extends Model<User> implements UserInterface {
    @AllowNull(false)
    @Column
    firstName: string;

    @AllowNull(false)
    @Column
    lastName: string;

    @AllowNull(false)
    @Column
    email: string;

    @AllowNull(false)
    @Column
    phone: string;

    @Column
    message: string;
}
