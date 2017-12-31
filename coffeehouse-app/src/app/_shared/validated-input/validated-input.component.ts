import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validated-input',
  templateUrl: './validated-input.component.html',
  styleUrls: [
    './validated-input.component.scss',
    '../../../sass/forms.scss'
  ]
})
export class ValidatedInputComponent {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() label: string;

}
