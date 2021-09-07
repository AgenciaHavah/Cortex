import { Table, Model, Column, AllowNull } from 'sequelize-typescript';
// import { TEXT } from 'sequelize';

@Table({ tableName: 'courses' })
export default class Course extends Model<Course> {
    @AllowNull(false)
    @Column
    title: string;

    @AllowNull(false)
    @Column
    promotionURL: string;

    // @AllowNull(false)
    // @Unique
    // @Column
    // data: string;

    // @AllowNull(false)
    // @Column
    // bannerURL: string;

    // @AllowNull(false)
    // @Column(TEXT)
    // description: string;

    // @AllowNull(false)
    // @Column
    // ctaURL: string;

    // @AllowNull(false)
    // @Column
    // slug: string;
}
