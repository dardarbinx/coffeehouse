import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validated-input',
  templateUrl: './validated-input.component.html',
  styleUrls: ['./validated-input.component.scss']
})
export class ValidatedInputComponent implements OnInit {

  @Input() formGroup: FormGroup;

  @Input() controlName: string;
  @Input() inputId = 'inputId';
  @Input() placeholder: string;
  @Input() formType: string;
  @Input() inputValue: string;
  @Input() label: string;

  @Input() required = false;

  constructor() { }

  ngOnInit() {
  }

}
