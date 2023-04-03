import httpStatus from "http-status";

export function handleApplicationErrors(err, req, res, next) {
  //erro 409
  if (err.name === "ConflictError" || err.name === "DuplicatedEmailError") {
    return res.status(httpStatus.CONFLICT).send({ message: err.message });
  }

  //erro 401
  if (err.name === "InvalidCredentialsError") {
    return res.status(httpStatus.UNAUTHORIZED).send({ message: err.message });
  }

  //erro 401
  if (err.name === "UnauthorizedError") {
    return res.status(httpStatus.UNAUTHORIZED).send({ message: err.message });
  }

  //erro 404
  if (err.name === "notFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({ message: err.message });
  }

  //erro 500
  return res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send({ error: "InternalServerError", message: "Internal Server Error" });
}

//Throw é reponsável por lançar o erro no catch. É o retorno da função de erro.
