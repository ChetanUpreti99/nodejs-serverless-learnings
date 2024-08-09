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
import middy from '@middy/core'




// testing building a simple handler
/* export const Signup = middy(async function (_event: any, _context: any) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello world'
        })
    }
}) */

/* export const Signup = async (_event: any, _context: any) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello world'
        })
    }
} */