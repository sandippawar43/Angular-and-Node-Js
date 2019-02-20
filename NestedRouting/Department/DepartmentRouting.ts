import {RouterModule,Routes} from "@angular/router"
import {ModuleWithProviders} from "@angular/core"
import {DepartmentClass} from "./DepartmentComponent"
import {ITClass} from "./ITDepartment"

const myroutes:Routes=[
    {path:'',component:DepartmentClass},
    {path:'IT',component:ITClass}
]
export const DeptRoutes:ModuleWithProviders=RouterModule.forChild(myroutes)