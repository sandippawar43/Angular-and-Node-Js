import {RouterModule,Routes} from "@angular/router"
import {ModuleWithProviders} from "@angular/core"
import {EmployeeClass} from "./EmployeeComponent"
import {AboutClass} from "./AboutEmpCOmponent"
const myroutes:Routes=[
    {path:'',component:EmployeeClass},
    {path:'about',component:AboutClass}
]
export const EmpRoutes:ModuleWithProviders=RouterModule.forChild(myroutes)