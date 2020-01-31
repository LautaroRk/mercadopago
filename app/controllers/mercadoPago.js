// importamos el modelo
//import User from '../models/User'
import Http from '../utils/http.js';
import Conn from '../config/conection.js';
import MercadopagoSDK from 'mercadopago';

// Exportamos la clase 
 export default class Mercadopago {
    /*
   * method to get form
   *
   * @param { express.req }
   * @param { express.res }
   *
   * @return { json }
   * */
  
  static async getFrom(req, res, next) {
      
    // Acceso a MP
     MercadopagoSDK.configure({
        sandbox: true,
        access_token: 'TEST-6439736099568640-010219-5b96e2c9af82b1f92c99773c69317c03-83314583',
      });

     //Valores
     const { id, email, description, amount } = req.params;

     //Create purchase item object template
    const purchaseOrder = {
        items: [
          {
            id: id,
            title: description,
            description : description,
            quantity: 1,
            currency_id: 'ARS',
            unit_price: parseFloat(amount)
          }
        ],
        payer : {
          email: email
        },
        auto_return : "all",
        external_reference : id,
        back_urls : {
          success : getFullUrl(req) + "/payments/success",
          pending : getFullUrl(req) + "/payments/pending",
          failure : getFullUrl(req) + "/payments/failure",
        }
      }

    //Generate init_point to checkout
    try {
      const preference = await MercadopagoSDK.preferences.create(purchaseOrder);
      return res.redirect(`${preference.body.init_point}`);
    }catch(err){
      return res.send(err.message);
    }
  }

  static async success(req, res, next) {
    console.log("success");
    res.send({ ...req.query, title: "success"});
  }

  static async pending(req, res, next) {
    console.log("pending");
    res.send({ ...req.query, title: "pending"});
  }

  static async failure(req, res, next) {
    console.log("failure");
    res.send({ ...req.query, title: "failure"});
  }

 }
const getFullUrl = (req) => {
    const url = req.protocol + '://' + req.get('host');
    console.log(url)
    return url;
  }




