import GenericError from './GenericError';

class NotFoundError extends GenericError {
  constructor() {
    super();
    this.message = 'not found';
    this._status = 404;
  }

  get status() {
    return this._status;
  }
}

export default NotFoundError;
