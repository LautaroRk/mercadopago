import Const from './constants.js';

// Clase para respuestas HTTP
export default class Http {
	
	/**
 	* @description Metodo para respuestas 200
 	* @param { Response<Object> } response 
	* @param  { Any * } data
	* @return { Object }
	*/
	static httpOK ( response ,data ) {

		data = data || null;
		if( !data ){
			return httpNoContent( response );
		}

		// Armamos el objeto de respuesta
		let message  = {
			status: Const.RESULT.SUCCESS,
			data: data,
			message: 'OK'
		}

		// Respondemos la peticion
		response
			.status(Const.HTTP_CODES.OK)
			.send( message );
	}	


	/**
	 * @description  Metodo para respuestas 204
	 * @param  { Response<Object> } response
	 * @return { Object }
	 */
	static httpNoContent ( response ) {
		// Armamos el objeto de respuesta
		let message  = {
			status: Const.RESULT.SUCCESS,
			message: 'No Content'
		}

		// respondmos la peticion
		response
			.status( Const.HTTP_CODES.NO_CONTENT )
			.send( message )
	}

	/**
	 * @description Metodo para respuestas 400
	 * @param  { Response<Object> } response
	 * @param  { Object } exception
	 * @return { Object }
	 */
	static httpBadRequest ( response, exception ) {

		exception = exception || null
		
		// Objeto de respuesta
		let message = {
			status: Const.RESULT.FAIL,
			exception: exception,
			message: 'Someting went wrong!'
		}

		// respondemos la peticion
		response
			.status( Const.HTTP_CODES.BAD_REQUEST )
			.send( message )
	}

	/**
	 * @description  Metodo para respuesta 401
	 * @param  { Response<Object> } response
	 * @param  { Any * } exception
	 * @return { OBject }
	 */
	static httpUnauthorized ( response, exception ){

		exception = exception || null;

		// Armamos el mensaje
		let message = {
			status: Const.RESULT.FAIL,
			exception: exception,
			message: 'Access Denied!'
		}

		// Respondemos la peticion
		response
			.status( Const.HTTP_CODES.UNAUTHORIZED )
			.send( message )
	}

	/**
	 * @description Metodo para respuestas 500
	 * @param  { Responde<Object> } response
	 * @param  { Any *} exception
	 * @return { Object }
	 */
	static httpInternalServerError ( response, exception ){
		
		exception = exception || null;

		// Mensaje de respuesta
		let message = {
			status: Const.RESULT.ERROR,
			exception: exception,
			message: 'Oops! The server has failed!'
		}

		// respondemos la peticion
		response
			.status( Const.HTTP_CODES.INTERNAL_SERVER_ERROR )
			.send( message )
	}
}
