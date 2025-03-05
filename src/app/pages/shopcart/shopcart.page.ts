import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { FakeStoreService } from 'src/app/services/fake-store.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.page.html',
  styleUrls: ['./shopcart.page.scss'],
  standalone: false
})
export class ShopcartPage implements OnInit {

  products: Product[] = [];
  total: number = 0;
  showF: boolean=false;

  constructor(private storage: StorageServiceService, private fss: FakeStoreService) { 
    
  }

  

  ionViewWillEnter() {
    this.getFavorites(); 
  }

  ngOnInit() {
    this.calculateTotal();
  }
    
  getFavorites(): void {
      let IDS = this.storage.getCartStorage(); 
      this.products = [];
  
      IDS.forEach(({ item, amount }) => {
        this.fss.getProductById(item).subscribe({
          
          next: (res: any) => {
            //console.log(res);
            this.products.push({ ...res, amount }); 
          }
        });
      });
}

  resetPage(e: any){
    this.getFavorites();
    this.calculateTotal();
  }

  showForm(){
    this.showF=true;
  }

  calculateTotal(){
    this.storage.total$.subscribe(count => {
      this.total = count; 
      console.log(count)
    });
  }


}
