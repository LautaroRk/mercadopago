import User from '../models/User'
import { MainController, ResponseService }  from '@beardedframework/core'
import { to } from '@beardedframework/lumberjack';
/*
 * @class {{name}}
 **/
export default class {{name}} extends MainController{
  
  /*
   * example method to store
   * @param { express.req }
   * @param { express.res }
   * @return { promise }
   * */
  public store =  async(req, res) => {
    
   return ResponseService.success('controller store method', {}, res)
  }

  /*
   * example method to update
   * @param { express.req }
   * @param { express.res }
   * @return { promise }
   * */
  public update = async  (req, res) => {

   return ResponseService.success('controller update method', {}, res)
  }

  /*
   * example method to get
   * @param { express.req }
   * @param { express.res }
   * @return { promise }
   * */
  public get = async (req, res) =>  {

   return ResponseService.success('controller get method', {}, res)
  }

  /*
   * example method to fetch
   * @param { express.req }
   * @param { express.res }
   * @return { promise }
   * */
  public fetch = async (req, res) =>   {

   return ResponseService.success('controller fetch method', {}, res)
  }
}
