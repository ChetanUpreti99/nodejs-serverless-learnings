// import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
// import middy from "@middy/core";
// import jsonBodyParser from '@middy/http-json-body-parser'
// // import bodyParser from "@middy/http-json-body-parser";
// // import { container } from "tsyringe";
// import { UserService } from "../service/userService";
// // const service = container.resolve(UserService);
// // export const Signup = middy((event: APIGatewayProxyEventV2) => {
// //     return service.CreateUser(event);
// // }).use(bodyParser());
// // export const signupHandler = async (event: APIGatewayProxyEventV2) => {
// //     return {
// //         statusCode: 200,
// //         body: JSON.stringify({
// //             message: 'hello world',
// //         }),
// //     };
// // }
// // export const Signup = middy(signupHandler)
// //     .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object
// // // .handler(signupHandler)
// // export const Signup = async (event: APIGatewayProxyEventV2) => {
// //     return {
// //         statusCode: 200,
// //         body: JSON.stringify({
// //             message: `Hello from ${event.body}`,
// //         })
// //     }
// // }
// export const Signup = middy<APIGatewayProxyEventV2, APIGatewayProxyResultV2>()
//     .handler(async (req, context) => {
//         return {
//             statusCode: 200,
//             body: JSON.stringify({
//                 message: `Hello from ${req.body}`,
//                 req
//             })
//         }
//     })
// testing an import of middy using ESM
import middy from '@middy/core';
// testing a top level await promise
await Promise.resolve("hello");
// testing building a simple handler
export const handler = middy(async function (_event, _context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello world'
        })
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvaGFuZGxlcnMvdXNlckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0ZBQWdGO0FBQ2hGLG1DQUFtQztBQUVuQyw0REFBNEQ7QUFDNUQsNERBQTREO0FBQzVELDJDQUEyQztBQUUzQyx3REFBd0Q7QUFFeEQscURBQXFEO0FBRXJELHNFQUFzRTtBQUN0RSwyQ0FBMkM7QUFDM0MsMkJBQTJCO0FBRzNCLDZFQUE2RTtBQUM3RSxrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLG9DQUFvQztBQUNwQyx5Q0FBeUM7QUFDekMsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixPQUFPO0FBRVAsZ0RBQWdEO0FBQ2hELHlHQUF5RztBQUN6RyxnQ0FBZ0M7QUFLaEMsc0VBQXNFO0FBQ3RFLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDLHNEQUFzRDtBQUN0RCxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLE9BQU87QUFFUCxpRkFBaUY7QUFDakYseUNBQXlDO0FBQ3pDLG1CQUFtQjtBQUNuQiwrQkFBK0I7QUFDL0IscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCxzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixTQUFTO0FBR1QsdUNBQXVDO0FBQ3ZDLE9BQU8sS0FBSyxNQUFNLGFBQWEsQ0FBQTtBQUUvQixvQ0FBb0M7QUFDcEMsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBRTlCLG9DQUFvQztBQUNwQyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssV0FBVyxNQUFXLEVBQUUsUUFBYTtJQUNuRSxPQUFPO1FBQ0gsVUFBVSxFQUFFLEdBQUc7UUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNqQixPQUFPLEVBQUUsYUFBYTtTQUN6QixDQUFDO0tBQ0wsQ0FBQTtBQUNMLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5RXZlbnRWMiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0VjIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuLy8gaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiO1xuXG4vLyBpbXBvcnQganNvbkJvZHlQYXJzZXIgZnJvbSAnQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlcidcbi8vIC8vIGltcG9ydCBib2R5UGFyc2VyIGZyb20gXCJAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyXCI7XG4vLyAvLyBpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwidHN5cmluZ2VcIjtcblxuLy8gaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS91c2VyU2VydmljZVwiO1xuXG4vLyAvLyBjb25zdCBzZXJ2aWNlID0gY29udGFpbmVyLnJlc29sdmUoVXNlclNlcnZpY2UpO1xuXG4vLyAvLyBleHBvcnQgY29uc3QgU2lnbnVwID0gbWlkZHkoKGV2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudFYyKSA9PiB7XG4vLyAvLyAgICAgcmV0dXJuIHNlcnZpY2UuQ3JlYXRlVXNlcihldmVudCk7XG4vLyAvLyB9KS51c2UoYm9keVBhcnNlcigpKTtcblxuXG4vLyAvLyBleHBvcnQgY29uc3Qgc2lnbnVwSGFuZGxlciA9IGFzeW5jIChldmVudDogQVBJR2F0ZXdheVByb3h5RXZlbnRWMikgPT4ge1xuLy8gLy8gICAgIHJldHVybiB7XG4vLyAvLyAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbi8vIC8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gLy8gICAgICAgICAgICAgbWVzc2FnZTogJ2hlbGxvIHdvcmxkJyxcbi8vIC8vICAgICAgICAgfSksXG4vLyAvLyAgICAgfTtcbi8vIC8vIH1cblxuLy8gLy8gZXhwb3J0IGNvbnN0IFNpZ251cCA9IG1pZGR5KHNpZ251cEhhbmRsZXIpXG4vLyAvLyAgICAgLnVzZShqc29uQm9keVBhcnNlcigpKSAvLyBwYXJzZXMgdGhlIHJlcXVlc3QgYm9keSB3aGVuIGl0J3MgYSBKU09OIGFuZCBjb252ZXJ0cyBpdCB0byBhbiBvYmplY3Rcbi8vIC8vIC8vIC5oYW5kbGVyKHNpZ251cEhhbmRsZXIpXG5cblxuXG5cbi8vIC8vIGV4cG9ydCBjb25zdCBTaWdudXAgPSBhc3luYyAoZXZlbnQ6IEFQSUdhdGV3YXlQcm94eUV2ZW50VjIpID0+IHtcbi8vIC8vICAgICByZXR1cm4ge1xuLy8gLy8gICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4vLyAvLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vIC8vICAgICAgICAgICAgIG1lc3NhZ2U6IGBIZWxsbyBmcm9tICR7ZXZlbnQuYm9keX1gLFxuLy8gLy8gICAgICAgICB9KVxuLy8gLy8gICAgIH1cbi8vIC8vIH1cblxuLy8gZXhwb3J0IGNvbnN0IFNpZ251cCA9IG1pZGR5PEFQSUdhdGV3YXlQcm94eUV2ZW50VjIsIEFQSUdhdGV3YXlQcm94eVJlc3VsdFYyPigpXG4vLyAgICAgLmhhbmRsZXIoYXN5bmMgKHJlcSwgY29udGV4dCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuLy8gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBIZWxsbyBmcm9tICR7cmVxLmJvZHl9YCxcbi8vICAgICAgICAgICAgICAgICByZXFcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgIH1cbi8vICAgICB9KVxuXG5cbi8vIHRlc3RpbmcgYW4gaW1wb3J0IG9mIG1pZGR5IHVzaW5nIEVTTVxuaW1wb3J0IG1pZGR5IGZyb20gJ0BtaWRkeS9jb3JlJ1xuXG4vLyB0ZXN0aW5nIGEgdG9wIGxldmVsIGF3YWl0IHByb21pc2VcbmF3YWl0IFByb21pc2UucmVzb2x2ZShcImhlbGxvXCIpXG5cbi8vIHRlc3RpbmcgYnVpbGRpbmcgYSBzaW1wbGUgaGFuZGxlclxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBtaWRkeShhc3luYyBmdW5jdGlvbiAoX2V2ZW50OiBhbnksIF9jb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdIZWxsbyB3b3JsZCdcbiAgICAgICAgfSlcbiAgICB9XG59KSJdfQ==