import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
  
})
export class HeaderComponent  implements OnInit {
  cartItemCount: number = 0;

  constructor(private storageService: StorageServiceService) {}

  ngOnInit() {
    this.storageService.cartCount$.subscribe(count => {
      this.cartItemCount = count; 
    });
  }
}
