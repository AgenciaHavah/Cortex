class ApiExpectedError {
    code: number;

    message: string;

    constructor(errorCode: number, errorMessage: string) {
        this.code = errorCode;
        this.message = errorMessage;
    }

    static badRequest(msg: string): ApiExpectedError {
        return new ApiExpectedError(400, msg);
    }

    static forbiddenAccess(msg: string): ApiExpectedError {
        return new ApiExpectedError(403, msg);
    }

    static internalError(msg: string): ApiExpectedError {
        return new ApiExpectedError(500, msg);
    }
}

export default ApiExpectedError;
