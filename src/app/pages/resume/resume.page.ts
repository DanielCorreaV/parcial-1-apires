import { Component, Input, OnInit } from '@angular/core';
import { Bill } from 'src/app/interfaces/bill';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
  standalone: false
})
export class ResumePage implements OnInit {

  bill: Bill={
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

  constructor(private storage: StorageServiceService) { }

  loading: boolean=true;

  ngOnInit() {
    const nav = window.history.state;
    if (nav.bill) {
      this.bill=nav.bill;
      console.log(this.bill);
      console.log(nav.bill)
    }
    this.storage.clearCartStorage();
    setTimeout(() => {
      this.loading=false;
    }, 3000);
  }

}
