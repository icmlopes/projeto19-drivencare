export function conflictError(message) {
  return {
    name: "ConflictError",
    message,
  };
}

export function duplicatedEmailError() {
  return {
    name: "DuplicatedEmailError",
    message:
      "There is already a user with this email! You can try again with another.",
  };
}

export function unauthorizedError() {
  return {
    name: "UnauthorizedError",
    message: "Ops, you must be signed in to continue!",
  };
}

export function notFoundError() {
  return {
    name: "notFoundError",
    message: "We foud 0 result for this search!",
  };
}

export function invalidCredentialsError() {
  return {
    name: "InvalidCredentialsError",
    message: "Your e-mail or password are incorrect",
  };
}
