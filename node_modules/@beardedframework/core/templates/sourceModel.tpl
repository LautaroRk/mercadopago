import { Model } from '@beardedframework/lumberjack';

/*
 * @class {{name}}
 * */
export default class {{name}} extends Model{

  /*
   * @var { string } the database table name
   * */
  public table : string = '{{tableName}}';

  /*
   * @var { array } the fillable fields of database
   * */
  public fillable : Array<string> = [];
  
  /*
   * @var { array } the hidden fields of database
   * */
  public hidden : Array<string> = [];

  /*
   * class constructor
   * */
  constructor(data : any = {}){
     super(data);
  }
}
