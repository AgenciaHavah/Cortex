import {
    Table,
    Model,
    Column,
    AllowNull,
    HasMany,
    Unique,
} from 'sequelize-typescript';

import Location from './Location';

@Table({ tableName: 'countries' })
export default class Country extends Model<Location> {
    @AllowNull(false)
    @Column
    label: string;

    @AllowNull(false)
    @Unique
    @Column
    code: string;

    @HasMany(() => Location)
    locations: Location[];
}
