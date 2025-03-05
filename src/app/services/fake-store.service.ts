import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FakeStoreService{

  constructor() { }

  http= inject(HttpClient);

  getProducts(sort?: string){
    //console.log(environment.baseUrl+environment.product+'?sort='+sort)
    return this.http.get(environment.baseUrl+environment.product+'?sort='+sort);
  }

  getProductById(id:string){
    return this.http.get(environment.baseUrl+environment.product +'/'+ id);
  }

  getProductsByCategory(category:string, sort?:string){
    //console.log(environment.baseUrl+environment.product+'/'+environment.category + '/' +'?sort='+sort)
    return this.http.get(environment.baseUrl+environment.product+'/'+environment.category + '/' +category+'?sort='+sort);
  }

  getCategories(){
    return this.http.get(environment.baseUrl+environment.product + '/categories/');
  }

}
