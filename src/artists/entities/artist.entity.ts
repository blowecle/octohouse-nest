import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    artistId: number;

    @Column()
    name: string;

    @Column()
    company: string;

    // @Column()
    // social: Array<string>;

    @Column()
    blurb: string;

    @Column()
    title: string;

    // @Column()
    // artifactId: Array<number>;
}
