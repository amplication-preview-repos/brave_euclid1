import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  notificationTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
