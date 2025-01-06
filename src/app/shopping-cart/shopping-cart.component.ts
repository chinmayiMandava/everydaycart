import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    MatTableModule,
    RouterLink,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent implements OnInit {
  products: any;
  displayedColumns = ['image', 'product', 'quantity', 'price', 'remove'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  checkoutTotal: any = 0;

  constructor(
    private service: ShoppingService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getProductsAddedToCart();
  }

  getProductsAddedToCart() {
    this.products = this.service.totalProductsAddedToShoopingCart;
    this.dataSource = new MatTableDataSource(this.products);
    this.getTotalPrice();
  }

  updateQuantity(method: string, product: any) {
    if (method === 'add') {
      this.service.updateCart.emit({ product, action: 'add' });
    }
    if (method === 'reduce') {
      if (product && product.quantity > 1) {
        this.service.updateCart.emit({ product, action: 'reduce' });
      }
    }
    this.getTotalPrice();
  }

  removeProduct(product: any) {
    this.service.updateCart.emit({ product, action: 'remove' });
    this.getProductsAddedToCart();
    this.openSnackbar('Product removed from cart');
    this.getTotalPrice();
  }

  openSnackbar(message: string) {
    this.snackBar.open(message, '', {
      panelClass: 'custom-snackbar',
      duration: 3000,
    });
  }

  getTotalPrice() {
    this.checkoutTotal = this.service.getTotalPrice();
  }
}
