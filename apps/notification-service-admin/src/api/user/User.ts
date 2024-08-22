import { LoginAttempt } from "../loginAttempt/LoginAttempt";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  loginAttempts?: Array<LoginAttempt>;
  notifications?: Array<Notification>;
  passwordField: string | null;
  roles: JsonValue;
  rolesField?: "Option1" | null;
  updatedAt: Date;
  username: string;
  usernameField: string | null;
};
