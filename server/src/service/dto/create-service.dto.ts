import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateServiceDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(45)
    name_of_the_service: string;
}