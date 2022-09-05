import GenericError from './GenericError';

class NonExistentUserError extends GenericError {
  constructor() {
    super();
    this.message = 'unregistered user';
    this._status = 400;
  }
}

export default NonExistentUserError;
