import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsOptional } from "class-validator";

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    artistId: number;

    @Column()
    name: string;

    @Column({nullable: true})
    company: string;

    // @Column({nullable: true})
    // social: Array<string>;

    @Column({nullable: true})
    blurb: string;

    @Column({nullable: true})
    title: string;

    // @Column({nullable: true})
    // artifactId: Array<number>;
}
