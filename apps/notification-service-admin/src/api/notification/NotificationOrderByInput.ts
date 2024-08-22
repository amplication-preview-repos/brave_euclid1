import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  notificationTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
