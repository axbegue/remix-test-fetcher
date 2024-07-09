// The convention is that left is used for failure cases and the right hand side is used for success cases.
// The Either type is a discriminated union type that can be either a Left or a Right.
// When Either's are used for success/failure paths, they are called biased Either's.
// When they hold two potential types for a purpose unrelated to success or failure, they are referred to as an unbiased Either.

export type Left<L> = {
  readonly kind: 'left';
  readonly left: L;
};

export type Right<R> = {
  readonly kind: 'right';
  readonly right: R;
};

export type EitherType<L, R> = Left<L> | Right<R>;
export type UnwrapEither = <L, R>(e: Either<L, R>) => L | R;

export class Either<L, R> {
  constructor(private readonly value: EitherType<L, R>) {}

  isLeft() {
    return this.value.kind === 'left';
  }

  isRight() {
    return this.value.kind === 'right';
  }

  fold<T>(ifLeft: (left: L) => T, ifRight: (right: R) => T): T {
    switch (this.value.kind) {
      case 'left':
        return ifLeft(this.value.left);
      case 'right':
        return ifRight(this.value.right);
    }
  }

  fold2<E, T>(ifLeft: (left: L) => E, ifRight: (right: R) => T): E | T {
    switch (this.value.kind) {
      case 'left':
        return ifLeft(this.value.left);
      case 'right':
        return ifRight(this.value.right);
    }
  }

  map<T>(fn: (r: R) => T): Either<L, T> {
    return this.flatMap((r) => Either.right(fn(r)));
  }

  flatMap<T>(fn: (right: R) => Either<L, T>): Either<L, T> {
    return this.fold(
      (leftValue) => Either.left(leftValue),
      (rightValue) => fn(rightValue),
    );
  }

  mapLeft<T>(fn: (l: L) => T): Either<T, R> {
    return this.flatMapLeft((l) => Either.left(fn(l)));
  }

  flatMapLeft<T>(fn: (left: L) => Either<T, R>): Either<T, R> {
    return this.fold(
      (leftValue) => fn(leftValue),
      (rightValue) => Either.right(rightValue),
    );
  }

  getOrThrow(errorMessage?: string): R {
    const throwFn = () => {
      throw Error(errorMessage ? errorMessage : 'An error has ocurred: ' + this.value);
    };

    return this.fold(
      () => throwFn(),
      (rightValue) => rightValue,
    );
  }

  getOrElse(defaultValue: R): R {
    return this.fold(
      () => defaultValue,
      (someValue) => someValue,
    );
  }

  unwrap(): L | R {
    if (this.value.kind === 'left') {
      return this.value.left as L;
    }
    if (this.value.kind === 'right') {
      return this.value.right as R;
    }
    throw new Error(`Received no left or right values at runtime when opening Either`);
  }

  unwrapRight(): R {
    if (this.value.kind === 'left') {
      throw new Error(`No right value found when opening Either`);
    }
    if (this.value.kind === 'right') {
      return this.value.right as R;
    }
    throw new Error(`Received no left or right values at runtime when opening Either`);
  }

  unwrapLeft(): L {
    if (this.value.kind === 'left') {
      return this.value.left as L;
    }
    if (this.value.kind === 'right') {
      throw new Error(`No left value found when opening Either`);
    }
    throw new Error(`Received no left or right values at runtime when opening Either`);
  }

  static left = <L>(value: L): Either<L, never> => new Either({ kind: 'left', left: value });

  static right = <R>(value: R): Either<never, R> => new Either({ kind: 'right', right: value });
}
