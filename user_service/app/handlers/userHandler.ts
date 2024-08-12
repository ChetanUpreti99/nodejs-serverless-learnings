import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import middy from "@middy/core";

import jsonBodyParser from '@middy/http-json-body-parser'


import { UserService, container } from "../service/userService";




export const SignupHandler = async (event: APIGatewayProxyEventV2) => {
    const service = container.get<UserService>(UserService);
    return service.createUser(event);
}

export const Signup = middy<APIGatewayProxyEventV2, APIGatewayProxyResultV2>()
    .use(jsonBodyParser())
    .handler(SignupHandler);


export const Login = async (event: APIGatewayProxyEventV2) => {
    const service = container.get<UserService>(UserService);
}

export const Verify = async (event: APIGatewayProxyEventV2) => {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    const service = container.get<UserService>(UserService);
    if (httpMethod === "get") {
        return service.getVerificationToken(event);

    } else if (httpMethod === "post") {
        return service.getVerificationToken(event);
    } else {

    }
}

export const Profile = async (event: APIGatewayProxyEventV2) => {
    const service = container.get<UserService>(UserService);
    return service.getProfile(event);
}


export const Cart = async (event: APIGatewayProxyEventV2) => {
    const service = container.get<UserService>(UserService);
    return service.getCart(event);
}

export const Payment = async (event: APIGatewayProxyEventV2) => {
    const service = container.get<UserService>(UserService);
    return service.getPaymentMethod(event);
}
