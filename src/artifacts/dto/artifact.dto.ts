import { Expose } from "class-transformer"

export class ArtifactDto {
    @Expose()
    artifactId: number;

    @Expose()
    name: string;

    @Expose()
    blurb: string;

    @Expose()
    images: string[];

    @Expose()
    artistID: number[];

    @Expose()
    artistDescription: string[];

    @Expose()
    approved: boolean;
}