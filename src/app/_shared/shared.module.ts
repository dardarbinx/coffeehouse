import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ValidatedInputComponent } from './validated-input/validated-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ModalComponent,
    ValidatedInputComponent
  ],
  exports: [
    ModalComponent,
    ValidatedInputComponent
  ]
})
export class SharedModule { }
