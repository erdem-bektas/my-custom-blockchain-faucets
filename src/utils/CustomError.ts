export default class CustomError extends Error {
  name: string;
  status: number;

  constructor(name: string, message: string, status: number) {
    super(message);
    this.name = name;
    this.status = status;
  }
}
