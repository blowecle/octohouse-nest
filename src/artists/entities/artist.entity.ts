import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { IsOptional } from "class-validator";
import { Artifact } from "src/artifacts/entities/artifact.entity";

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    artistId: number;

    @Column()
    name: string;

    @Column({nullable: true})
    company: string;

    @Column("text", {nullable: true, array: true})
    social: Array<string>;

    @Column({nullable: true})
    blurb: string;

    @Column({nullable: true})
    title: string;

    @Column({default: false})
    approved: boolean;

    @ManyToMany(() => Artifact, artifact => artifact.artists)
    artifacts: Artifact[];

    @Column("int", {nullable: true, array: true})
    artifactId: Array<number>;
}
