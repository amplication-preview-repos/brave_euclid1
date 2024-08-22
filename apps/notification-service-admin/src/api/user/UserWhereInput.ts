import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoginAttemptListRelationFilter } from "../loginAttempt/LoginAttemptListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  loginAttempts?: LoginAttemptListRelationFilter;
  notifications?: NotificationListRelationFilter;
  passwordField?: StringNullableFilter;
  rolesField?: "Option1";
  username?: StringFilter;
  usernameField?: StringNullableFilter;
};
