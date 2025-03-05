import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { CardItemComponent } from 'src/app/components/card-item/card-item.component';
import { ShopCartItemComponent } from 'src/app/components/shop-cart-item/shop-cart-item.component';
import { PaymentFormComponent } from 'src/app/components/payment-form/payment-form.component';
import { ReactiveFormsModule } from '@angular/forms';

let MyComponents=[
  HeaderComponent, 
  CardItemComponent, 
  ShopCartItemComponent, 
  PaymentFormComponent
]

@NgModule({
  declarations: MyComponents,
  imports: [
    CommonModule, IonicModule, RouterLink, ReactiveFormsModule
  ],
  exports: MyComponents 
})
export class SharedModule { }
