import { Optional } from "@nestjs/common";
import { IsInt, IsNotEmpty, IsString, MaxLength, Max } from "class-validator";

export class CreateOrderDto {
    @IsInt()
    @IsNotEmpty()
    id_tour: number;

    @IsInt()
    @IsNotEmpty()
    id_client: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    transport: string;

    @IsString()
    @Optional()
    type_of_food?: string;

    @IsString()
    @Optional()
    type_of_accommodation?: string;

    @IsInt()
    @IsNotEmpty()
    @Max(65)
    cost: number;
}