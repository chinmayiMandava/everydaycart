import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShoppingService } from '../services/shopping.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    RouterLink,
    MatBadgeModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  itemsInCart: number = 0;
  noOfFavItems: number = 0;

  constructor(private service: ShoppingService) {}

  ngOnInit() {
    this.service.itemsInCart.subscribe((res) => {
      this.itemsInCart = res;
    });

    this.service.itemsInWishlist.subscribe((res) => {
      this.noOfFavItems = res;
    });
  }
}
