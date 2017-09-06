import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {EmptyComponent} from "./empty.component";

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    EmptyComponent
  ],
})

export class EmptyModule {
}
