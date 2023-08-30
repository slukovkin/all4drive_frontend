import { UserInterface } from "./user.interface";

export interface AuthStateInterface {
    isLoggin: boolean;
    user: UserInterface | null;
    validationErrors: string[] | null;
  }