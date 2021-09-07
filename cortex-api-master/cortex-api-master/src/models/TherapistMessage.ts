/* eslint-disable @typescript-eslint/ban-types */
import {
    Table,
    Model,
    Column,
    AllowNull,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';

import Therapist from './Therapist';

@Table({ tableName: 'therapists_messages' })
export default class TherapistMessage extends Model<TherapistMessage> {
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
    message: string;

    @ForeignKey(() => Therapist)
    @AllowNull(false)
    @Column
    therapistId: number;

    @BelongsTo(() => Therapist)
    therapist: Therapist;
}
