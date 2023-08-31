import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialUiModule } from "./shared/material-ui/material-ui.module";
import { HeaderComponent } from "./shared/components/header/header.component";
import { AuthModule } from "./modules/auth/auth.module";
import { RoutesModule } from "./modules/routes/routes.module";
import { RouterOutlet } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { ReportsComponent } from './pages/reports/reports.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ReportsComponent, DocumentsComponent, DashboardComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    AuthModule,
    RoutesModule,
    RouterOutlet,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
