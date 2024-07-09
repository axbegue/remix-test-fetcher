export class ErrorBase<T extends string> {
  name: T;
  message: string;
  cause: unknown;

  constructor({ name, message, cause }: { name: T; message: string; cause?: unknown }) {
    this.name = name;
    this.message = message;
    this.cause = cause;
  }

  withCause(cause: unknown) {
    this.cause = cause;
    return this;
  }
}
