import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Artist } from "src/artists/entities/artist.entity";

@Entity()
export class Artifact {
    @PrimaryGeneratedColumn()
    artifactId: number;
    
    @Column()
    name: string;
    
    @Column({array: true})
    images: Array<string>;
    
    @Column()
    blurb: string;
    
    @Column({array: true})
    artistId: Array<number>;
    
    @Column({array: true})
    artistDescription: Array<string>;

    @Column({default: false})
    approved: boolean;

    @ManyToMany(() => Artist, artist => artist.artifacts)
    @JoinTable()
    artists: Artist[];
}
