import {BrowserModule} from "@angular/platform-browser"
import {NgModule} from "@angular/core"
import {FormsModule} from "@angular/forms"

import {apicomponent} from "./apicomponent"
import {HttpClientModule} from "@angular/common/http"
@NgModule
({
imports:[BrowserModule,HttpClientModule,FormsModule],
declarations:[apicomponent],
bootstrap:[apicomponent]

})
export class apimoduleclass
{

}
