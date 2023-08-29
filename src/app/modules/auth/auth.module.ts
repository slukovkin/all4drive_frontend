import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [LoginComponent, RegistrationComponent],
})
export class AuthModule {}
