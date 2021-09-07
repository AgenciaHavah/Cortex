/* eslint-disable @typescript-eslint/ban-types */
import {
    Table,
    Model,
    Column,
    AllowNull,
    HasMany,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';

// Types
import { TherapistInterface } from '../types/Entities';

import TherapistMessage from './TherapistMessage';
import Location from './Location';

@Table({ tableName: 'therapists' })
export default class Therapist
    extends Model<Therapist>
    implements TherapistInterface {
    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column
    email: string;

    @AllowNull(false)
    @Column
    phone: string;

    @AllowNull(false)
    @Column
    street: string;

    @AllowNull(false)
    @Column
    number: string;

    @Column
    complement: string;

    @AllowNull(false)
    @Column
    city: string;

    @AllowNull(false)
    @Column
    state: string;

    @AllowNull(false)
    @Column
    postalCode: string;

    @AllowNull(false)
    @Column
    coordinates: string;

    @Column
    action: string;

    @HasMany(() => TherapistMessage)
    messages: TherapistMessage[];

    @AllowNull(false)
    @ForeignKey(() => Location)
    @Column
    locationId: number;

    @BelongsTo(() => Location)
    location: Location;
}
