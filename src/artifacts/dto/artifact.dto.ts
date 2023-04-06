import { Expose } from "class-transformer"

export class ArtifactDto {
    @Expose()
    artifactId: number;

    @Expose()
    name: string;

    @Expose()
    blurb: string;
}