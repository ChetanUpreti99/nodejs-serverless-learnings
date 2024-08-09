var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { autoInjectable } from "tsyringe";
import { successResponse } from "../utility/response";
let UserService = class UserService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    // User Creation, Validation & Login
    async CreateUser(event) {
        try {
            console.log(` this.repository`, this.repository);
            const data = await this.repository.createAccount();
            return successResponse(data);
        }
        catch (error) {
            return successResponse({});
        }
    }
};
UserService = __decorate([
    autoInjectable()
], UserService);
export { UserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvc2VydmljZS91c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0lBQ3BCLFVBQVUsQ0FBaUI7SUFDM0IsWUFBWSxVQUEwQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBNkI7UUFDMUMsSUFBSSxDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ25ELE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsT0FBTyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFL0IsQ0FBQztJQUVMLENBQUM7Q0FDSixDQUFBO0FBbkJZLFdBQVc7SUFEdkIsY0FBYyxFQUFFO0dBQ0osV0FBVyxDQW1CdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlFdmVudFYyIH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcbmltcG9ydCB7IGF1dG9JbmplY3RhYmxlIH0gZnJvbSBcInRzeXJpbmdlXCI7XG5cblxuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vcmVwb3NpdG9yeS91c2VyUmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgc3VjY2Vzc1Jlc3BvbnNlIH0gZnJvbSBcIi4uL3V0aWxpdHkvcmVzcG9uc2VcIjtcbkBhdXRvSW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIHJlcG9zaXRvcnk6IFVzZXJSZXBvc2l0b3J5O1xuICAgIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnk6IFVzZXJSZXBvc2l0b3J5KSB7XG4gICAgICAgIHRoaXMucmVwb3NpdG9yeSA9IHJlcG9zaXRvcnk7XG4gICAgfVxuXG4gICAgLy8gVXNlciBDcmVhdGlvbiwgVmFsaWRhdGlvbiAmIExvZ2luXG4gICAgYXN5bmMgQ3JlYXRlVXNlcihldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnRWMikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCB0aGlzLnJlcG9zaXRvcnlgLCB0aGlzLnJlcG9zaXRvcnkpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMucmVwb3NpdG9yeS5jcmVhdGVBY2NvdW50KCk7XG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc1Jlc3BvbnNlKGRhdGEpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc1Jlc3BvbnNlKHt9KTtcblxuICAgICAgICB9XG5cbiAgICB9XG59Il19