class NonExistentUserError extends Error {
  public status: number;
  public message: string;
  constructor() {
    super();
    this.message = "unregistered user";
    this.status = 400;
  }
}

export default NonExistentUserError;