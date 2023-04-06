import { IsString, IsOptional } from "class-validator";

export class CreateArtistDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    company: string;

    @IsOptional()
    @IsString()
    blurb: string;

    @IsOptional()
    @IsString()
    title: string;
}
