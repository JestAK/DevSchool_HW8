import {IsString} from "class-validator";

export class PatchEmployeeDto{
    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsString()
    middleName: string

    @IsString()
    position: string
}