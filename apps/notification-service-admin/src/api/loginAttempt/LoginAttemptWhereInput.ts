import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoginAttemptWhereInput = {
  attemptTime?: DateTimeNullableFilter;
  id?: StringFilter;
  isSuccess?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
