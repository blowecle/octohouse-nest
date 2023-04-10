import { Expose } from "class-transformer";

export class ApproveArtifactDto {
    @Expose()
    approved: boolean;
}