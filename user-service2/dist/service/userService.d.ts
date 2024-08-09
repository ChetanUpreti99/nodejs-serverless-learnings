import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserRepository } from "../repository/userRepository";
export declare class UserService {
    repository: UserRepository;
    constructor(repository: UserRepository);
    CreateUser(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        headers: {
            "Access-Control-Allow-Origin": string;
        };
        body: string;
    }>;
}
