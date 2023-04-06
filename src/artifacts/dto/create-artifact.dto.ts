import { IsString } from "class-validator";

export class CreateArtifactDto {
    @IsString()
    name: string;

    @IsString()
    blurb: string;
}
