import { Component, Input, OnInit, output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.scss'],
  standalone: false
})
export class ShopCartItemComponent  implements OnInit {
  @Input() quantity: number=0;
  reset = output<any>();

  constructor(private storage: StorageServiceService) { }

  ngOnInit() {}

  @Input() product!: Product;
  @Input() alternativeStyle: boolean = false;

  increaseQuantity() {
    this.quantity++;
    this.setQuantity(this.quantity);
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.setQuantity(this.quantity);
    }
  }

  setQuantity(quantity: any){
    
    this.quantity= Number(quantity);
    console.log(this.quantity);

    this.storage.uptAmount(this.product.id, this.quantity);

  }

  removeFromCart(id: number){
    this.storage.removeFromCartStorage(id);
    this.reset.emit(true);
  }



}
