import {NgModule} from "@angular/core"
import {DepartmentClass} from "./DepartmentComponent"
import {DeptRoutes} from "./DepartmentRouting"
import {ITClass} from "./ITDepartment"

@NgModule({
    imports:[DeptRoutes],
    declarations:[DepartmentClass,ITClass]
})
export class DepartmentModuleClass{
    
}