import { IsString, IsOptional } from "class-validator";

export class UpdateArtifactDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    blurb: string;
}
