import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Moment } from 'moment';

export function dateValidator(): ValidatorFn {
   return (control: AbstractControl): {
      [key: string]: any
    } => {
      const value = control.value;
      const today = moment().format();

      if (value < today) {
         return { 'dateInvalid' : value };
      }

      // if (date.diff(value) > moment.duration(1, 'years')) {

      // }
      return null;
   };
}
