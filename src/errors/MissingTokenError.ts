import GenericError from './GenericError';

class MissingTokenError extends GenericError {
  constructor() {
    super();
    this.message = 'token is required';
    this._status = 400;
  }
}

export default MissingTokenError;
