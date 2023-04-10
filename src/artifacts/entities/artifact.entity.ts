import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Artist } from "src/artists/entities/artist.entity";

@Entity()
export class Artifact {
    @PrimaryGeneratedColumn()
    artifactId: number;
    
    @Column()
    name: string;
    
    // @Column()
    // images: Array<string>;
    
    @Column()
    blurb: string;
    
    // @Column()
    // artistId: Array<number>;
    
    // @Column()
    // artistDescription: Array<string>;

    @Column({default: false})
    approved: boolean;

    @ManyToMany(() => Artist, artist => artist.artifacts)
    @JoinTable()
    artists: Artist[];
}
