import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {StatisticsComponent} from "./statistics.component";
import {LaddaModule} from 'angular2-ladda';
@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule
  ],
  exports: [
    StatisticsComponent
  ],
})

export class StatisticsModule {
}
