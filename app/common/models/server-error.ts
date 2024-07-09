export type ServerError = {
  name: string;
  status: number;
  message: string;
};

/*
{
	"message": "Forbidden resource",
	"error": "Forbidden",
	"statusCode": 403
}

{
	"data": null,
	"error": {
		"name": "UserNotFound",
		"status": 404,
		"message": "Usuario no encontrado o no autorizado."
	}
}
*/
