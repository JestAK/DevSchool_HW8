import {Body, Controller, Param, ParseIntPipe, Patch} from '@nestjs/common';
import {PatchEmployeeDto} from "./dto";

@Controller('employees')
export class EmployeesController {

    @Patch(':employeeId')
    patchEmployee(@Param('employeeId', ParseIntPipe) employeeId: number, @Body() patchDto: PatchEmployeeDto){
        return
    }


}
