import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {UserInterface} from "../interfaces/user.interface";
import {
  RegisterRequestInterface
} from "../interfaces/register-request.interface";
import {AuthResponseInterface} from "../interfaces/auth-response.interface";
import {LoginRequestInterface} from "../interfaces/login-request.interface";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(data: RegisterRequestInterface): Observable<UserInterface> {
    const url = environment.apiUrl + 'auth/registration';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.user));
  }

  login(data: LoginRequestInterface): Observable<UserInterface> {
    const url = environment.apiUrl + 'auth/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.user));
  }
}