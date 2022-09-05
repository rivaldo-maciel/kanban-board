import GenericError from './GenericError';

class WrongLoginFieldsError extends GenericError {
  constructor() {
    super();
    this.message = 'your email or password is incorrect';
    this._status = 400;
  }
}

export default WrongLoginFieldsError;
