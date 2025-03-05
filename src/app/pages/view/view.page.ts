import { FactoryTarget } from '@angular/compiler';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { FakeStoreService } from 'src/app/services/fake-store.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
  standalone: false
})
export class ViewPage implements OnInit {


  productID: string = "";
  route =inject(ActivatedRoute);
  fss= inject(FakeStoreService);
  storage= inject(StorageServiceService);
  isitFavorite: boolean = false;
  cartButtonClass="";
  cartButtonContent=""
  product: Product={
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0
    }
  };


  constructor() {this.productID= this.route.snapshot.paramMap.get("id") || ""; }

  ngOnInit() {
    
    this.getProductById(this.productID);
  }

  

  getProductById(id: string):any{
    this.fss.getProductById(id).subscribe({
      next: (res: any)=>{
        this.product=res;
        this.isInCart();
      }
      
      
    })
  }

  goBack(){
    window.history.back();
  }


    admCartStorage(){
      this.storage.admCartStorage(this.product.id);
      this.isInCart();
    }
  
    isInCart() {
      
      let isfav= this.storage.isInCart(this.product.id);
      if(isfav){
        this.cartButtonContent="🗑️ Remove from cart";
        this.cartButtonClass='not-in-cart-button';
        
      }else{
        this.cartButtonContent="⭐ add to cart"
        this.cartButtonClass='in-cart-button';
        
      }
    }




}
