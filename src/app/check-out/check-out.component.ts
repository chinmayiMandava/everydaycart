import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    RouterModule,
    RouterLink,
  ],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss',
})
export class CheckOutComponent {
  private _formBuilder = inject(FormBuilder);

  addressFormGroup = this._formBuilder.group({
    name: ['', [Validators.required]],
    number: ['', [Validators.required]],
    mail: [''],
    houseNo: [''],
    area: [''],
    landmark: [''],
    pincode: [''],
    city: [''],
    state: [''],
  });
  shippingMode = new FormControl('1', []);

  paymentOptions = [
    {
      id: 1,
      iconClass: 'upi-pay',
      mainText: 'Pay via UPI',
      subText: 'Use any registered UPI ID',
    },
    {
      id: 2,
      iconClass: 'card-pay',
      mainText: 'Debit/credit cards',
      subText: 'Visa, Mastercard, RuPay & more',
    },
    {
      id: 3,
      iconClass: 'net-banking-pay',
      mainText: 'Net banking',
      subText: 'Select from a list of banks',
    },
    {
      id: 4,
      iconClass: 'cod-pay',
      mainText: 'Cash on delivery',
      subText: 'Pay at your door step',
    },
  ];
}
