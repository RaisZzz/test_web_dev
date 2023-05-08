import { IsDateString, IsInt, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateTourDto {
    @IsInt()
    @IsNotEmpty()
    id_country: number;

    @IsInt()
    @IsNotEmpty()
    id_resort: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    visa_service: string;

    @IsInt()
    @IsNotEmpty()
    number_of_days: number;

    @IsDateString()
    @IsNotEmpty()
    daparture: Date;

    @IsDateString()
    @IsNotEmpty()
    date_arrival_date: Date;
}