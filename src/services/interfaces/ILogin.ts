interface ILogin {
  sigIn(email: string, password: string): Promise<string>
}

export default ILogin;