import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  updateCart = new EventEmitter();
  updateWishList = new EventEmitter();
  productsAddedToWishList: any[] = [];
  productsAddedToCart: any[] = [];
  itemsInWishlist = new EventEmitter();
  itemsInCart = new EventEmitter();

  constructor(private snackbar: MatSnackBar) {
    this.updateWishList.subscribe((res: any) => {
      if (res.action === 'add') this.addProductToWishlist(res.product);
      else if (res.action === 'remove')
        this.removeProductFromWishlist(res.product);
    });

    this.updateCart.subscribe((res: any) => {
      if (res.action === 'add') this.addProductToCart(res.product);
      else if (res.action === 'remove') this.removeProductFromCart(res.product);
      else if (res.action === 'reduce') this.reduceProductToCart(res.product);
    });
  }

  get totalProductsAddedToWishList() {
    return this.productsAddedToWishList;
  }

  addProductToWishlist(product: any) {
    this.productsAddedToWishList.push(product);
    product.isAddedToFav = true;
    this.updateWishListCount();
  }

  removeProductFromWishlist(product: any) {
    let index = this.productsAddedToWishList.indexOf(product);
    this.productsAddedToWishList.splice(index, 1);
    product.isAddedToFav = false;
    this.updateWishListCount();
  }

  get totalProductsAddedToShoopingCart() {
    return this.productsAddedToCart;
  }

  addProductToCart(product: any) {
    let found = this.productsAddedToCart.find((p: any) => p.id === product.id);
    if (found && found.quantity < 10) {
      found.quantity++;
      this.openSnackbar('Product added to cart');
    } else if (!found) {
      this.productsAddedToCart.push(product);
      this.openSnackbar('Product added to cart');
    } else {
      this.openSnackbar('Maximum quantity of 10 units per product is allowed');
    }
    this.updateCartCount();
  }

  removeProductFromCart(product: any) {
    let index = this.productsAddedToCart.indexOf(product);
    product.quantity = 1;
    this.productsAddedToCart.splice(index, 1);
    this.updateCartCount();
  }

  reduceProductToCart(product: any) {
    let found = this.productsAddedToCart.find((p: any) => p.id === product.id);
    if (found) found.quantity--;
    this.updateCartCount();
  }

  updateWishListCount() {
    this.itemsInWishlist.emit(this.productsAddedToWishList.length);
  }

  updateCartCount() {
    let total = Object.values(this.productsAddedToCart).reduce(
      (t, { quantity }) => t + quantity,
      0
    );
    this.itemsInCart.emit(total);
  }

  openSnackbar(message: string) {
    this.snackbar.open(message, '', {
      panelClass: 'custom-snackbar',
      duration: 3000,
    });
  }
}
