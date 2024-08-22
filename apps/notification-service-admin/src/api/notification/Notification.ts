import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  notificationTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
