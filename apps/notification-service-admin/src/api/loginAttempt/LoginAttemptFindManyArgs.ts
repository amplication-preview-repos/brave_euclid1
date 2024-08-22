import { LoginAttemptWhereInput } from "./LoginAttemptWhereInput";
import { LoginAttemptOrderByInput } from "./LoginAttemptOrderByInput";

export type LoginAttemptFindManyArgs = {
  where?: LoginAttemptWhereInput;
  orderBy?: Array<LoginAttemptOrderByInput>;
  skip?: number;
  take?: number;
};
