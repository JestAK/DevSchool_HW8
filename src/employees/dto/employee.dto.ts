import {IsNotEmpty, IsString} from "class-validator";

export class PatchEmployeeDto{
    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsNotEmpty()
    @IsString()
    lastName: string

    @IsNotEmpty()
    @IsString()
    middleName: string

    @IsNotEmpty()
    @IsString()
    position: string
}