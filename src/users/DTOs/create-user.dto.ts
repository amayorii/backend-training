import {
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
} from 'class-validator';

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    Name: string;

    @IsNumber()
    @IsPositive()
    @IsInt()
    @IsNotEmpty()
    Age: number;
}
