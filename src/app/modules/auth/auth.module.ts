import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { StoreModule } from "@ngrx/store";
import { authReducer } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { RegisterEffect } from "./store/effects/register.effect";
import { LoginEffect } from "./store/effects/login.effects";
import { DocumentsComponent } from "src/app/pages/documents/documents.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "documents",
    component: DocumentsComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "registration",
    component: RegistrationComponent,
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("auth", authReducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
  ],
  providers: [AuthService],
  exports: [LoginComponent, RegistrationComponent],
})
export class AuthModule {}
