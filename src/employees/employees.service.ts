import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {PatchEmployeeDto} from "./dto";

@Injectable()
export class EmployeesService {

    constructor(private prisma: PrismaService) {}

    async patchEmployee(id: number, employeeData: PatchEmployeeDto){

        try {
            return await this.prisma.patchEmployee(id, employeeData)
        }
        catch (error) {
            return {
                message: error.message,
                code: error.code,
            }
        }
    }


}
