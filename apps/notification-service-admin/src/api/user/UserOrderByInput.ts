import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  passwordField?: SortOrder;
  roles?: SortOrder;
  rolesField?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  usernameField?: SortOrder;
};
