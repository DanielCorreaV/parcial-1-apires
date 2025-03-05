import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { FakeStoreService } from './fake-store.service';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  
  cartStorage = "";
  private cartCount = new BehaviorSubject<number>(0); 
  cartCount$ = this.cartCount.asObservable(); 

  private total = new BehaviorSubject<number>(0); 
  total$ = this.total.asObservable(); 

  constructor(private toastController: ToastController, private fss: FakeStoreService) { 
    this.updateCartCount(); 
    this.calculateTotal();

  }
  


  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration || 1500,
      position: 'top',
    });

    await toast.present();
  }


  addToCartStorage(item: any): void {
    const array = this.getCartStorage(); 
    array.push(
      {
        item: item,
        amount: 1
      }
  ); 
    localStorage.setItem(this.cartStorage, JSON.stringify(array)); 
    this.presentToast("Added to cart")
    this.updateCartCount();
    this.calculateTotal();
  }

  removeFromCartStorage(id: number): void {
    const array = this.getCartStorage(); 
    const index = array.findIndex(item => item.item === id); // Buscar por propiedad "item"
    
    if (index !== -1) {
      array.splice(index, 1); 
      localStorage.setItem(this.cartStorage, JSON.stringify(array));
      this.presentToast("Removed from cart");
      this.updateCartCount();
    }
    if(array.length==0){
      this.total.next(0);
    }
    this.calculateTotal();
  }


  getCartStorage(): any[] {
    const data = localStorage.getItem(this.cartStorage);
    return data ? JSON.parse(data) : []; 
  }

  clearCartStorage(){
    localStorage.removeItem(this.cartStorage);
    this.cartCount.next(0);
    this.total.next(0);
  }

  isInCart(id: number): boolean {
    const array = this.getCartStorage();
    return array.some(obj => obj.item === id);
  }

  admCartStorage(id: number){
    const isfav= this.isInCart(id);
    if(isfav){
      this.removeFromCartStorage(id);
    }else{
      this.addToCartStorage(id);
    }

  }

  uptAmount(id: number,amount: number){
    const array = this.getCartStorage();
    const index = array.findIndex(item => item.item === id);
    if (index !== -1) {
      array[index].amount = amount;
      localStorage.setItem(this.cartStorage, JSON.stringify(array));
      this.calculateTotal();
    }
    

  }

  private updateCartCount() {
    const totalItems = this.getCartStorage().length;
    this.cartCount.next(totalItems); 
  }

  private calculateTotal() {
    const items = this.getCartStorage();
    let aux=0;

    items.forEach(id => {
      this.fss.getProductById(id.item).subscribe({
        next: (res: any)=>{
          //console.log(res.price);
          aux += res.price*id.amount;
          this.total.next(aux);
      }
      });
      
    });

    

     
  }


}

