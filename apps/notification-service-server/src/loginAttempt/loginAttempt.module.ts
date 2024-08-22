import { Module } from "@nestjs/common";
import { LoginAttemptModuleBase } from "./base/loginAttempt.module.base";
import { LoginAttemptService } from "./loginAttempt.service";
import { LoginAttemptController } from "./loginAttempt.controller";
import { LoginAttemptResolver } from "./loginAttempt.resolver";

@Module({
  imports: [LoginAttemptModuleBase],
  controllers: [LoginAttemptController],
  providers: [LoginAttemptService, LoginAttemptResolver],
  exports: [LoginAttemptService],
})
export class LoginAttemptModule {}
