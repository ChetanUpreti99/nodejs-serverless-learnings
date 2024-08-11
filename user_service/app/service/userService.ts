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
    async createUser(event: APIGatewayProxyEventV2) {
        try {
            let body = event.body;
            // console.log(` this.repository`, email);
            const data = await this.repository.createAccount();
            return successResponse(data);

        } catch (error) {
            return successResponse({});

        }
    }

    async userLogin(event: APIGatewayProxyEventV2) {
        try {
            let body = event.body;
            // console.log(` this.repository`, email);
            const data = await this.repository.createAccount();
            return successResponse(data);

        } catch (error) {
            return successResponse({});

        }
    }

    async getVerificationToken(event: APIGatewayProxyEventV2) {
    }

    async verifyUser(event: APIGatewayProxyEventV2) {
        try {
            let body = event.body;
            // console.log(` this.repository`, email);
            const data = await this.repository.createAccount();
            return successResponse(data);

        } catch (error) {
            return successResponse({});

        }
    }

    // User profile
    async createProfile(event: APIGatewayProxyEventV2) {
        return successResponse({ message: "response from Create User Profile" });
    }

    async getProfile(event: APIGatewayProxyEventV2) {
        return successResponse({ message: "response from Get User Profile" });
    }
    async editProfile(event: APIGatewayProxyEventV2) {
        return successResponse({ message: "response from Edit User Profile" });
    }

    // Cart Section
    async createCart(event: APIGatewayProxyEventV2) {
        return successResponse({ message: "response from Create Cart" });
    }

    async getCart(event: APIGatewayProxyEventV2) {
        return successResponse({ message: "response from Get Cart" });
    }

    async updateCart(event: APIGatewayProxyEventV2) {
        return successResponse({ message: "response from Update Cart" });
    }

    // Payment Section
    async createPaymentMethod(event: APIGatewayProxyEventV2) {
        return successResponse({ message: "response from Create Payment Method" });
    }

    async getPaymentMethod(event: APIGatewayProxyEventV2) {
        return successResponse({ message: "response from Get Payment Method" });
    }

    async updatePaymentMethod(event: APIGatewayProxyEventV2) {
        return successResponse({ message: "response from Update Payment Method" });
    }
}