import GenericError from "./GenericError";

class DuplicateUserError extends GenericError {
  constructor() {
    super();
    this.message = "this email is already registered";
    this.status = 400;
  }
}

export default DuplicateUserError;