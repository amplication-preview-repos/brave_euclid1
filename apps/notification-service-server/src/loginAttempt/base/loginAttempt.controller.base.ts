/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LoginAttemptService } from "../loginAttempt.service";
import { LoginAttemptCreateInput } from "./LoginAttemptCreateInput";
import { LoginAttempt } from "./LoginAttempt";
import { LoginAttemptFindManyArgs } from "./LoginAttemptFindManyArgs";
import { LoginAttemptWhereUniqueInput } from "./LoginAttemptWhereUniqueInput";
import { LoginAttemptUpdateInput } from "./LoginAttemptUpdateInput";

export class LoginAttemptControllerBase {
  constructor(protected readonly service: LoginAttemptService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LoginAttempt })
  async createLoginAttempt(
    @common.Body() data: LoginAttemptCreateInput
  ): Promise<LoginAttempt> {
    return await this.service.createLoginAttempt({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        attemptTime: true,
        createdAt: true,
        id: true,
        isSuccess: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LoginAttempt] })
  @ApiNestedQuery(LoginAttemptFindManyArgs)
  async loginAttempts(@common.Req() request: Request): Promise<LoginAttempt[]> {
    const args = plainToClass(LoginAttemptFindManyArgs, request.query);
    return this.service.loginAttempts({
      ...args,
      select: {
        attemptTime: true,
        createdAt: true,
        id: true,
        isSuccess: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LoginAttempt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async loginAttempt(
    @common.Param() params: LoginAttemptWhereUniqueInput
  ): Promise<LoginAttempt | null> {
    const result = await this.service.loginAttempt({
      where: params,
      select: {
        attemptTime: true,
        createdAt: true,
        id: true,
        isSuccess: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LoginAttempt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLoginAttempt(
    @common.Param() params: LoginAttemptWhereUniqueInput,
    @common.Body() data: LoginAttemptUpdateInput
  ): Promise<LoginAttempt | null> {
    try {
      return await this.service.updateLoginAttempt({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          attemptTime: true,
          createdAt: true,
          id: true,
          isSuccess: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LoginAttempt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLoginAttempt(
    @common.Param() params: LoginAttemptWhereUniqueInput
  ): Promise<LoginAttempt | null> {
    try {
      return await this.service.deleteLoginAttempt({
        where: params,
        select: {
          attemptTime: true,
          createdAt: true,
          id: true,
          isSuccess: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}