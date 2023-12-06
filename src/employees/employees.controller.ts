import {Body, Controller, Param, ParseIntPipe, Patch} from '@nestjs/common';
import {PatchEmployeeDto} from "./dto";
import {EmployeesService} from "./employees.service";

@Controller('employees')
export class EmployeesController {

    constructor(private employeeService: EmployeesService) {}

    @Patch(':employeeId')
    patchEmployee(@Param('employeeId', ParseIntPipe) employeeId: number, @Body() patchDto: PatchEmployeeDto){
        return this.employeeService.patchEmployee(employeeId, patchDto)
    }
}
