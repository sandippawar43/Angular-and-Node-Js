import {RouterModule,Routes} from "@angular/router"
import {ModuleWithProviders} from "@angular/core"
 

const myroutes:Routes=[
    {path:'employee',loadChildren:"./Employee/EmployeeModule#EmployeeModuleClass"},
    {path:'department',loadChildren:"./Department/DepartmentModule#DepartmentModuleClass"}
]
export const MainRoutes:ModuleWithProviders=RouterModule.forRoot(myroutes)