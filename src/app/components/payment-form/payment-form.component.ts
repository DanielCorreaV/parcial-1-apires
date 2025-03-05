import { Component, Input, OnInit, output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bill } from 'src/app/interfaces/bill';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  standalone: false
})
export class PaymentFormComponent  implements OnInit {
  billForm: FormGroup;
  @Input() Total: number = 0;
  close= output<any>();
  bill: Bill = {
    name: '',
    lastName: '',
    country: '',
    city: '',
    address: '',
    bank: '',
    cvc: 0,
    dueDate: '',
    total: 0
  };

  constructor(private fb: FormBuilder, private router: Router, private storage: StorageServiceService) {
    this.billForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      bank: ['', Validators.required],
      cvc: ['', [Validators.required, Validators.min(100), Validators.max(999)]],
      dueDate: ['',  Validators.required],
      total: 0
    });
  }
  ngOnInit(): void {
    console.log(this.Total);
  }

  onSubmit() {
    if (this.billForm.valid) {
      
      this.bill = this.billForm.value;
      this.bill.total= this.Total;
      console.log('Datos del formulario:', this.bill);
    } else {
      console.log('Formulario inválido');
    }
  }

  closeForm(){
    this.close.emit(true);
  }

  resume(){
    this.storage.presentToast("processing...",2000);
    setTimeout(() => {
      this.closeForm();
      this.router.navigate(['/resume'], { state: { bill: this.bill } });
    }, 2000);
    
  }

}
