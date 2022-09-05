abstract class GenericError extends Error {
  protected _status: number;
  protected _message: string;

  get status() {
    return this._status;
  }
}

export default GenericError;