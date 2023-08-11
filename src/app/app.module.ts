import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialUiModule} from "./shared/material-ui/material-ui.module";
import {HeaderComponent} from "./shared/components/header/header.component";
import {AuthModule} from "./modules/auth/auth.module";
import {RoutesModule} from "./modules/routes/routes.module";
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    AuthModule,
    RoutesModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
