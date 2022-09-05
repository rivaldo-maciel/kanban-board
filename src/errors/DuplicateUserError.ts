import GenericError from './GenericError';

class DuplicateUserError extends GenericError {
  protected _status: number;
  constructor() {
    super();
    this.message = 'this email is already registered';
    this._status = 400;
  }

  get status() {
    return this._status;
  }
}

export default DuplicateUserError;
