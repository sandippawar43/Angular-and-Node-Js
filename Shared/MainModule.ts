import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {MainClass} from "./MainComponent"
import {ChildModuleClass} from "./Child/ChildModule"
@NgModule({
    imports:[BrowserModule,ChildModuleClass],
    declarations:[MainClass],
    bootstrap:[MainClass]
})

export class MainModuleClass{

}