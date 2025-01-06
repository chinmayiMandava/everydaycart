import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { ShoppingService } from '../services/shopping.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, RouterLink],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent implements OnInit {
  product: any;
  id: number = 1;
  category: string = 'snacksNdMunchies';

  constructor(
    private dService: DataService,
    private sService: ShoppingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['productId'];
      this.category = param['category'];
    });
    console.log(this.category);
    if (this.category == 'snacksNdMunchies') {
      this.product = this.dService.snacksNdMunchies.products.find(
        (product) => product.id === +this.id
      );
    } else if (this.category == 'fruitsNdVegetables') {
      this.product = this.dService.fruitsNdVegetables.products.find(
        (product) => product.id === +this.id
      );
    } else if (this.category == 'diaryProducts') {
      this.product = this.dService.diaryProducts.products.find(
        (product) => product.id === +this.id
      );
    } else if (this.category == 'drinksNdJuices') {
      this.product = this.dService.drinksNdJuices.products.find(
        (product) => product.id === +this.id
      );
    }
  }

  updateQuantity(method: string, product: any) {
    if (method === 'add') {
      if (product && product.quantity < 10) product.quantity++;
    }
    if (method === 'reduce') {
      if (product && product.quantity > 1) product.quantity--;
    }
  }

  addToCart(product: any) {
    console.log(product);
    this.sService.addToCart.emit({ product });
  }
}
