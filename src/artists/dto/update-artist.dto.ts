import { IsString, IsOptional } from "class-validator";


export class UpdateArtistDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    company: string;

    @IsString()
    @IsOptional()
    blurb: string;

    @IsString()
    @IsOptional()
    title: string;
}
