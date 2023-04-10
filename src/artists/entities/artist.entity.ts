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

    // @Column({nullable: true})
    // social: Array<string>;

    @Column({nullable: true})
    blurb: string;

    @Column({nullable: true})
    title: string;

    @Column({default: false})
    approved: boolean;

    // @Column({nullable: true})
    // artifactId: number;

    @ManyToMany(() => Artifact, artifact => artifact.artists)
    artifacts: Artifact[];

    // @Column({nullable: true})
    // artifactId: Array<number>;
}
