import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateCountryDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    country_name: string;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    presence_of_the_Russia_embassy: string;
}