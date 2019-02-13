import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {HttpClientComponentClass} from "./httpClientComponent"
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports:[BrowserModule,HttpClientModule],
    declarations:[HttpClientComponentClass],
    bootstrap:[HttpClientComponentClass]
})

export class Httpclass
{

}