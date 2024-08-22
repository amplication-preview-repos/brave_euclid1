import * as graphql from "@nestjs/graphql";
import { LoginAttemptResolverBase } from "./base/loginAttempt.resolver.base";
import { LoginAttempt } from "./base/LoginAttempt";
import { LoginAttemptService } from "./loginAttempt.service";

@graphql.Resolver(() => LoginAttempt)
export class LoginAttemptResolver extends LoginAttemptResolverBase {
  constructor(protected readonly service: LoginAttemptService) {
    super(service);
  }
}
