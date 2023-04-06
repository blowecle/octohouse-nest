import { IsEmail, IsString, IsOptional, IsBoolean } from "class-validator";

export class UpdateUserDto {
    @IsEmail()
    @IsOptional()
    email: string;
    
    @IsString()
    @IsOptional()
    password: string;

    @IsBoolean()
    @IsOptional()
    admin: boolean;
}