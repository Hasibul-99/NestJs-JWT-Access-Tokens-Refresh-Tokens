import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail({}, {
        message: 'Need valid email'
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
};