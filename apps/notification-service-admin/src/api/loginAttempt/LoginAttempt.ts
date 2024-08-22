import { User } from "../user/User";

export type LoginAttempt = {
  attemptTime: Date | null;
  createdAt: Date;
  id: string;
  isSuccess: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
