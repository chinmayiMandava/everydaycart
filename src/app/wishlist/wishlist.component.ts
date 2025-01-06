import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent implements OnInit {
  products: any;
  displayedColumns = [
    'image',
    'product',
    'price',
    'availability',
    'addToCart',
    'remove',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private service: ShoppingService) {}

  ngOnInit() {
    this.getProductsAddedToWishList();
  }

  getProductsAddedToWishList() {
    this.products = this.service.totalProductsAddedToWishList;
    this.dataSource = new MatTableDataSource(this.products);
  }

  removeFromWishList(product: any) {
    this.service.updateWishList.emit({ product, action: 'remove' });
    this.getProductsAddedToWishList();
    this.service.openSnackbar('Product removed from wish list');
  }

  addToCart(product: any) {
    this.service.updateCart.emit({ product, action: 'add' });
  }
}
