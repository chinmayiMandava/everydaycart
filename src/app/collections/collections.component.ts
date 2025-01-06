import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShoppingService } from '../services/shopping.service';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    WishlistComponent,
    MatTooltipModule,
    MatRippleModule,
    RouterLink,
  ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
})
export class CollectionsComponent implements OnInit {
  itemsAddedToCart: any = [];
  items: any;
  data: string = '';

  constructor(
    private service: ShoppingService,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.data = params['data'];
    });
    this.items = this.dataService.getData(this.data);
  }

  addToCart(product: any) {
    this.service.updateCart.emit({ product, action: 'add' });
  }

  addToFav(product: any, message?: any) {
    if (message) {
      this.service.openSnackbar('Product already added to wish list');
      return;
    }
    this.service.updateWishList.emit({ product, action: 'add' });
    this.service.openSnackbar('Product added to wish list');
  }
}
