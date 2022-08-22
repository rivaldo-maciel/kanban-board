class NotFoundError extends GenericError {
  constructor() {
    super();
    this.message = "not found";
    this.status = 404;
  }
}