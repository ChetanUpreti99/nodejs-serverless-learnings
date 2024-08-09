"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const formatResponse = (statusCode, message, data) => {
    if (data) {
        return {
            statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                message,
                data
            }),
        };
    }
    else {
        return {
            statusCode,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                message
            }),
        };
    }
};
const successResponse = (data) => {
    return formatResponse(200, "success", data);
};
exports.successResponse = successResponse;
const errorResponse = (code = 1000, error) => {
    if (Array.isArray(error)) {
        const errorObject = error[0].constraints;
        const errorMessage = errorObject[Object.keys(errorObject)[0]] || "Error Occurred!";
        return formatResponse(code, errorMessage);
    }
    return formatResponse(code, `Error`);
};
exports.errorResponse = errorResponse;
//# sourceMappingURL=response.js.map