import {CommonModule} from "@angular/common"
import {NgModule} from "@angular/core"
import {ChildClass} from "./ChildComponent"
import {SecondClass} from "./SecondComponent"
@NgModule({
    imports:[CommonModule],
    declarations:[ChildClass,SecondClass],
    exports:[ChildClass,SecondClass]
})

export class ChildModuleClass{

}