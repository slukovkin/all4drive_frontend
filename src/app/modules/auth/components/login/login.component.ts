import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserInterface } from "../../interfaces/user.interface";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { loginAction } from "../../store/actions/login.actions";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  title = "Login";

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit(): void {
    const request: UserInterface = this.form.value;
    this.store.dispatch(loginAction({ request }));
    if (this.form.valid) {
      this.initializeForm();
    }
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ["", Validators.email],
      password: ["", Validators.required],
    });
  }
}
