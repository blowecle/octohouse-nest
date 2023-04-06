import { Expose } from "class-transformer";

export class ArtistDto {
    @Expose()
    artistId: number;

    @Expose()
    name: string;

    @Expose()
    company: string;

    @Expose()
    blurb: string;

    @Expose()
    title: string;
}