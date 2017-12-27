import { patternValidator } from './pattern-validator';
import { AbstractControl } from '@angular/forms';

export function emailPatternValidator() {
    // tslint:disable-next-line
    return patternValidator(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
