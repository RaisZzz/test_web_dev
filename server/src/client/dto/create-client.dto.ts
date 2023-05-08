import { IsDateString, IsNotEmpty, IsString, IsInt, MaxLength } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  fcs: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  address: string;

  @IsDateString()
  @IsNotEmpty()
  date_of_birth: Date;

  @IsInt()
  @IsNotEmpty()
  passport_series: number;

  @IsInt()
  @IsNotEmpty()
  passport_number: number;
}
