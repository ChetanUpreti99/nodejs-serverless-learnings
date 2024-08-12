import { APIGatewayProxyEventV2 } from "aws-lambda";
import { plainToClass } from "class-transformer";
import { injectable, inject, Container } from 'inversify';

import { UserRepository } from "../repository/userRepository";
import { errorResponse, successResponse } from "../utility/response";
import { SignupInput } from "../models/dto/SignupInput";
import { appValidationError } from "../utility/errors";
import { getHashedPassword, getSalt, getToken, validatePassword } from "../utility/password";
import { UserModel } from "../models/UserModel";
import { LoginInput } from "../models/dto/LoginInput";

@injectable()
export class UserService {
	private _repository: UserRepository;
	constructor(@inject(UserRepository) repository: UserRepository) {
		this._repository = repository;
	}

	// User Creation, Validation & Login
	async createUser(event: APIGatewayProxyEventV2) {
		try {
			const input = plainToClass(SignupInput, event.body);
			const error = await appValidationError(input);
			if (error) {
				return errorResponse(404, error);
			}
			const salt = await getSalt();
			const hashedPassword = await getHashedPassword(input.password, salt);
			const data = await this._repository.createAccount({
				phone: input.phone,
				password: hashedPassword,
				salt: salt,
				email: input.email,
				userType: "BUYER",
			}) as UserModel;
			return successResponse(data);

		} catch (error) {
			console.log(error);
			return errorResponse(500, error);

		}
	}

	async userLogin(event: APIGatewayProxyEventV2) {
		try {
			const input = plainToClass(LoginInput, event.body);
			const error = await appValidationError(input);
			if (error) {
				return errorResponse(404, error);
			}
			const data = await this._repository.findAccount(input.email) as UserModel;
			const verified = await validatePassword(input.password, data.password, data.salt);
			if (!verified) {
				throw new Error("password does not match!");
			}
			const token = await getToken(data);
			return successResponse({ token });
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
			//const data = await this._repository.createAccount();
			//return successResponse(data);

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

// Create and configure the Inversify container
const container = new Container();
container.bind<UserRepository>(UserRepository).to(UserRepository);
container.bind<UserService>(UserService).to(UserService);

export { container };