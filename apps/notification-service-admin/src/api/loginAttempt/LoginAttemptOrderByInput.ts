import { SortOrder } from "../../util/SortOrder";

export type LoginAttemptOrderByInput = {
  attemptTime?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isSuccess?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
