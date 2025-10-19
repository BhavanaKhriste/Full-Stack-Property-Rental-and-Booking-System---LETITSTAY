// class ExpressError extends Error {
//     constructor(statusCode, message) {
//         super();
//         this.statusCode = statusCode;
//         this.message = message;
//     }
// }
// module.expors = ExpressError;
class ExpressError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}

module.exports = ExpressError;