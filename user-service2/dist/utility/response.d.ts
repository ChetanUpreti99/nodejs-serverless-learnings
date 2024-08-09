export declare const successResponse: (data: object) => {
    statusCode: number;
    headers: {
        "Access-Control-Allow-Origin": string;
    };
    body: string;
};
export declare const errorResponse: (code: number | undefined, error: unknown) => {
    statusCode: number;
    headers: {
        "Access-Control-Allow-Origin": string;
    };
    body: string;
};
