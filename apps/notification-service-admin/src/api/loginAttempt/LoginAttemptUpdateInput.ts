import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoginAttemptUpdateInput = {
  attemptTime?: Date | null;
  isSuccess?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
