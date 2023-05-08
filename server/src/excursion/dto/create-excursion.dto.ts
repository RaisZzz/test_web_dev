import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateExcursionDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name_excursion: string;
}