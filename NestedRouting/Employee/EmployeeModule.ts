import {NgModule} from "@angular/core"
import {EmployeeClass} from "./EmployeeComponent"
import {EmpRoutes} from "./EmployeeRouting"
import {AboutClass} from "./AboutEmpCOmponent"
@NgModule({
    imports:[EmpRoutes],
    declarations:[EmployeeClass,AboutClass]
})
export class EmployeeModuleClass{

}