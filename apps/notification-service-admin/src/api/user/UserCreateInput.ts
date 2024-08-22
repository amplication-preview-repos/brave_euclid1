import { LoginAttemptCreateNestedManyWithoutUsersInput } from "./LoginAttemptCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loginAttempts?: LoginAttemptCreateNestedManyWithoutUsersInput;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  passwordField?: string | null;
  roles: InputJsonValue;
  rolesField?: "Option1" | null;
  username: string;
  usernameField?: string | null;
};
