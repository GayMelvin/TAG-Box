/**
 * Created by mgay on 21/04/2017.
 */


import { FormControl } from '@angular/forms';


export class EmailValidator {


  static isValid(control: FormControl){
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(control.value);

    if (re){return null;}
    return {"invalidEmail": true};
  }
}
