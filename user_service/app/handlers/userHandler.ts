import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import middy from "@middy/core";
import bodyParser from "@middy/http-json-body-parser";
import { container } from "tsyringe";

import { UserService } from "../service/userService";

const service = container.resolve(UserService);

export const Signup = middy((event: APIGatewayProxyEventV2) => {
    return service.CreateUser(event);
}).use(bodyParser());


