// importamos los middlewares
import { middlewares } from '../config/middlewares';

// Importamos las rutas de las secciones
import MercadoRoutes from './mercadoPago.js';

// Router
export function setRouter( app ){
	// isntanciamos la clase y pasamos app
	new MercadoRoutes( app ); 

}

//router.get('/users/:id', );

