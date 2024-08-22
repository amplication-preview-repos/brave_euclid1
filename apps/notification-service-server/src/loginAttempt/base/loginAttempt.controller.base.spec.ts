import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { LoginAttemptController } from "../loginAttempt.controller";
import { LoginAttemptService } from "../loginAttempt.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  attemptTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isSuccess: "true",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  attemptTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isSuccess: "true",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    attemptTime: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    isSuccess: "true",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  attemptTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isSuccess: "true",
  updatedAt: new Date(),
};

const service = {
  createLoginAttempt() {
    return CREATE_RESULT;
  },
  loginAttempts: () => FIND_MANY_RESULT,
  loginAttempt: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("LoginAttempt", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LoginAttemptService,
          useValue: service,
        },
      ],
      controllers: [LoginAttemptController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /loginAttempts", async () => {
    await request(app.getHttpServer())
      .post("/loginAttempts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        attemptTime: CREATE_RESULT.attemptTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /loginAttempts", async () => {
    await request(app.getHttpServer())
      .get("/loginAttempts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          attemptTime: FIND_MANY_RESULT[0].attemptTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /loginAttempts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/loginAttempts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /loginAttempts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/loginAttempts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        attemptTime: FIND_ONE_RESULT.attemptTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /loginAttempts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/loginAttempts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        attemptTime: CREATE_RESULT.attemptTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/loginAttempts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
