import { LoginAttempt as TLoginAttempt } from "../api/loginAttempt/LoginAttempt";

export const LOGINATTEMPT_TITLE_FIELD = "id";

export const LoginAttemptTitle = (record: TLoginAttempt): string => {
  return record.id?.toString() || String(record.id);
};
