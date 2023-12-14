export class ApiRequestError extends Error {
  request: any;

  constructor(request: any) {
    super("request error");

    Object.setPrototypeOf(this, new.target.prototype);

    this.request = request;

    Error.captureStackTrace(this);
  }
}

export class ApiResponseError extends Error {
  response: any;

  constructor(response: any) {
    super("response error");

    Object.setPrototypeOf(this, new.target.prototype);

    this.response = response;

    Error.captureStackTrace(this);
  }
}
