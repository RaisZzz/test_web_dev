import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateResortDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    name_of_the_resort: string;
}