import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { DataService } from '../services/data.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-products',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './dashboard-products.component.html',
  styleUrl: './dashboard-products.component.scss',
})
export class DashboardProductsComponent implements OnInit {
  @Input() products: any;
  totalProducts: any = [];

  constructor(private service: ShoppingService, private dataSer: DataService) {}

  ngOnInit(): void {
    if (this.products.fruitsNdVegetables) {
      this.products.fruitsNdVegetables.forEach((product: any) => {
        let el = this.dataSer.fruitsNdVegetables.products.find(
          (pro) => pro.id === product
        );
        this.totalProducts.push(el);
      });
    }
    if (this.products.snacksNdMunchies) {
      this.products.snacksNdMunchies.forEach((product: any) => {
        let el = this.dataSer.snacksNdMunchies.products.find(
          (pro) => pro.id === product
        );
        this.totalProducts.push(el);
      });
    }
    if (this.products.diaryProducts) {
      this.products.diaryProducts.forEach((product: any) => {
        let el = this.dataSer.diaryProducts.products.find(
          (pro) => pro.id === product
        );
        this.totalProducts.push(el);
      });
    }
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
