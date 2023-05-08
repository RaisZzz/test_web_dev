import { IsInt, IsNotEmpty } from "class-validator";

export class CreateServiceTourDto {
    @IsInt()
    @IsNotEmpty()
    idService_service: number;
    
    @IsInt()
    @IsNotEmpty()
    idTour_tourr: number;
}