import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoginAttemptServiceBase } from "./base/loginAttempt.service.base";

@Injectable()
export class LoginAttemptService extends LoginAttemptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
