abstract class GenericError extends Error {
  protected _status: number;
  protected _message: string;

  constructor() {
    super();
    Object.setPrototypeOf(this, GenericError.prototype);
  }

  get status() {
    return this._status;
  }
}

export default GenericError;