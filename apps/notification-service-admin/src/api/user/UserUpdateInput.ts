import { LoginAttemptUpdateManyWithoutUsersInput } from "./LoginAttemptUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loginAttempts?: LoginAttemptUpdateManyWithoutUsersInput;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  passwordField?: string | null;
  roles?: InputJsonValue;
  rolesField?: "Option1" | null;
  username?: string;
  usernameField?: string | null;
};
