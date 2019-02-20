import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {MainClass} from "./MainComponent"
 import {MainRoutes} from "./MainRouting"

@NgModule({
    imports:[BrowserModule,MainRoutes],
    declarations:[MainClass],
    bootstrap:[MainClass]
})
export class MainModuleClass{
    
}