import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { FakeStoreService } from 'src/app/services/fake-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
  
})
export class HomePage implements OnInit {

  constructor(private fss: FakeStoreService) { 
    this.getProducts(); 
    this.getCategories();
  }

  products: Product[] = [];
  categories = [];
  category ='All';
  params: any = {};

  ngOnInit() {
    
  }

  getProducts(param?:string): void {
    
    this.products=[];
  
    this.fss.getProducts(param).subscribe({
      next: (res: any) => {
        console.log(res)
        res.forEach((product: any) => {
          this.products.push(product);
        });
      },
  
      
    });
  }


  getProductsByCategory(category: string, param?:string){
    
    if(category=='All'){
      this.getProducts();
      return;
    }
    this.category=category;

    this.fss.getProductsByCategory(category,param).subscribe({

      next: (res: any)=>{
        this.products = res;
      },
      
    })
  }

  getCategories(){
    this.fss.getCategories().subscribe({
      next: (res: any)=>{
        this.categories=res;
      }
    })
  }
  sort(param: string){
    if(this.category=='All'){
      this.getProducts(param);
    }else{
      this.getProductsByCategory(this.category,param);
    }
    
  }
  

}
