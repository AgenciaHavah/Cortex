import {
    Table,
    Model,
    Column,
    BelongsTo,
    ForeignKey,
    AllowNull,
    HasMany,
    Unique,
} from 'sequelize-typescript';

import Country from './Country';
import Therapist from './Therapist';

@Table({ tableName: 'locations' })
export default class Location extends Model<Location> {
    @AllowNull(false)
    @Column
    label: string;

    @AllowNull(false)
    @Unique
    @Column
    code: string;

    @AllowNull(false)
    @ForeignKey(() => Country)
    @Column
    countryId: number;

    @BelongsTo(() => Country)
    country: Country;

    @HasMany(() => Therapist)
    therapists: Therapist[];
}
