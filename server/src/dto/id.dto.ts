import { IsInt } from "class-validator";
import { Type } from "class-transformer";

export class IdDto {
    @IsInt()
    @Type(() => Number)
    id: number;
}