import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import middy from "@middy/core";
//import bodyParser from "@middy/http-json-body-parser";
import jsonBodyParser from '@middy/http-json-body-parser'

import { container } from "tsyringe";

import { UserService } from "../service/userService";

const service = container.resolve(UserService);


export const SignupHandler = async (event: APIGatewayProxyEventV2) => {
    return service.createUser(event);
}

export const Signup = middy<APIGatewayProxyEventV2, APIGatewayProxyResultV2>()
    .use(jsonBodyParser())
    .handler(SignupHandler);


export const Login = async (event: APIGatewayProxyEventV2) => {
    return service.userLogin(event);
}

export const Verify = async (event: APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "get") {
        return service.getVerificationToken(event);

    } else if (httpMethod === "post") {
        return service.getVerificationToken(event);
    } else {

    }
}

export const Profile = async (event: APIGatewayProxyEventV2) => {
    return service.getProfile(event);
}


export const Cart = async (event: APIGatewayProxyEventV2) => {
    return service.getCart(event);
}

export const Payment = async (event: APIGatewayProxyEventV2) => {
    return service.getPaymentMethod(event);
}
