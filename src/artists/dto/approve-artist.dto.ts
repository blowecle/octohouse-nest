import { IsBoolean } from "class-validator";

export class ApproveArtistDto {
    @IsBoolean()
    approved: boolean;
}