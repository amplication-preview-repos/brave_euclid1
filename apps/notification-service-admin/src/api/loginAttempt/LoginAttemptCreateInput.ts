import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoginAttemptCreateInput = {
  attemptTime?: Date | null;
  isSuccess?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
