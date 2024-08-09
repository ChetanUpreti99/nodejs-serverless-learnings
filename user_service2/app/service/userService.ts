import { APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";


import { UserRepository } from "../repository/userRepository";
import { successResponse } from "../utility/response";
@autoInjectable()
export class UserService {
    repository: UserRepository;
    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    // User Creation, Validation & Login
    async CreateUser(event: APIGatewayProxyEventV2) {
        try {
            console.log(` this.repository`, this.repository);
            const data = await this.repository.createAccount();
            return successResponse(data);

        } catch (error) {
            return successResponse({});

        }

    }
}