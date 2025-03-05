import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  standalone: false
})
export class CardItemComponent  implements OnInit {
  @Input() quantity: number=0;

  constructor(private storage: StorageServiceService) { }

  ngOnInit() {}

  @Input() product!: Product;
  

}
