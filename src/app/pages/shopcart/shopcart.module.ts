import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopcartPageRoutingModule } from './shopcart-routing.module';

import { ShopcartPage } from './shopcart.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopcartPageRoutingModule,
    SharedModule
  ],
  declarations: [ShopcartPage]
})
export class ShopcartPageModule {}
