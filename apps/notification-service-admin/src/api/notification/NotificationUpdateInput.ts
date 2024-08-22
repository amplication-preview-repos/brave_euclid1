import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  notificationTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
