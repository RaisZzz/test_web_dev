import { IsInt, IsNotEmpty } from "class-validator";

export class CreateTourExcursionDto {
    @IsInt()
    @IsNotEmpty()
    idExcursion_excursion: number;
    
    @IsInt()
    @IsNotEmpty()
    idTour_tourr: number;
}