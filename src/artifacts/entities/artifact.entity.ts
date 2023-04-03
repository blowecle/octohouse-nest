import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}
