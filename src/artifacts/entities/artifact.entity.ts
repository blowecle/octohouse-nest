import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Artist } from "src/artists/entities/artist.entity";

@Entity()
export class Artifact {
    @PrimaryGeneratedColumn()
    artifactId: number;
    
    @Column()
    name: string;
    
    @Column("text", {array: true})
    images: Array<string>;
    
    @Column()
    blurb: string;
    
    @Column("int", {array: true})
    artistID: Array<number>;
    
    @Column("text", {array: true})
    artistDescription: Array<string>;

    @Column({default: false})
    approved: boolean;

    @Column("int", {array: true, nullable: true})
    random: Array<number>;

    @ManyToMany(() => Artist, artist => artist.artifacts)
    @JoinTable()
    artists: Artist[];
}
