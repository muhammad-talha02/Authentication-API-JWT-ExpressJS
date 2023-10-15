// class ErrorHandler extends Error {
//     statusCode;
//     constructor(message, statusCode) {
//       super(message);
//       this.statusCode = statusCode;

//       Error.captureStackTrace(this, this.constructor);
//     }
//   }

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "Failed" : "Server Error";
    

    this.isOperationalError = true;

    Error.captureStackTrace(this, this.constructor)
  }
}

  export default ErrorHandler
