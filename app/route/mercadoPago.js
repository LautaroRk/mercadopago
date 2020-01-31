// importamos el controlador
import MercadoPago from '../controllers/mercadoPago.js';
// devolvemos las rutas de cada seccion
export default app => {
	// Definimos las rutas
	app.get('/payments/checkout/:id/:email/:description/:amount',  MercadoPago.getFrom); 
	app.get('/payments/success', MercadoPago.success);
	app.get('/payments/pending', MercadoPago.pending);
	app.get('/payments/failure', MercadoPago.failure);
	
}