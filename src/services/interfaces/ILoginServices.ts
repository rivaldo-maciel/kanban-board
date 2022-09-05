interface ILoginServices {
  sigIn(email: string, password: string): Promise<string>
}

export default ILoginServices;