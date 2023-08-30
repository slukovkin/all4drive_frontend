import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { UserInterface } from "../../interfaces/user.interface";
import { Store } from "@ngrx/store";
import { registerAction } from "../../store/actions/register.action";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements OnInit {
  title = "Registration";

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ["", Validators.email],
      password: ["", [Validators.minLength(4)]],
    });
  }

  onSubmit(): void {
    const request: UserInterface = this.form.value
    this.store.dispatch(registerAction({request}))
    if (this.form.valid) {
      this.initializeForm();
    }
  }
}
