import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LoginAttemptService } from "./loginAttempt.service";
import { LoginAttemptControllerBase } from "./base/loginAttempt.controller.base";

@swagger.ApiTags("loginAttempts")
@common.Controller("loginAttempts")
export class LoginAttemptController extends LoginAttemptControllerBase {
  constructor(protected readonly service: LoginAttemptService) {
    super(service);
  }
}
