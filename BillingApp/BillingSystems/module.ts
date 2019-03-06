import {NgModule} from "@angular/core"
import {FormsModule} from "@angular/forms"
import {BrowserModule} from "@angular/platform-browser"
import {BillingClass} from "./BillingComponent"
import {HttpClientModule} from "@angular/common/http"
import { BillClass } from './BillCmponent';

@NgModule({
    imports:[FormsModule,BrowserModule,HttpClientModule],
    declarations:[BillingClass,BillClass],
    bootstrap:[BillClass]
})

export class BillingModuleClass
{

}