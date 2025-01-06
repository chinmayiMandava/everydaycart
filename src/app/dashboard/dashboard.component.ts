import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { MatButtonModule } from '@angular/material/button';
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { DashboardProductsComponent } from '../dashboard-products/dashboard-products.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CarouselComponent,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    DashboardProductsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  categoryData = [
    {
      id: 1,
      class: 'category--fruitsveggies',
      title: 'Fruits & vegetables',
      directTo: '',
      data: 'fruitsNdVegetables',
    },
    {
      id: 2,
      class: 'category--attaflour',
      title: 'Rice, atta & dals',
      directTo: '',
      data: 'attaNdFlour',
    },
    {
      id: 3,
      class: 'category--snacksmunchies',
      title: 'Snacks & munchies',
      directTo: '',
      data: 'snacksNdMunchies',
    },
    {
      id: 4,
      class: 'category--diary',
      title: 'Diary products',
      directTo: '',
      data: 'diaryProducts',
    },
    {
      id: 5,
      class: 'category--drinksjuices',
      title: 'Juices & drinks',
      directTo: '',
      data: 'drinksNdJuices',
    },
    {
      id: 6,
      class: 'category--planners',
      title: 'Planners',
      directTo: '',
    },
    {
      id: 6,
      class: 'category--calendars',
      title: 'Calendars',
      directTo: '',
    },
  ];

  bestSellingProducts = {
    snacksNdMunchies: [5, 7, 14],
    fruitsNdVegetables: [23, 24],
    diaryProducts: [45, 46, 48],
  };

  newProducts = {
    snacksNdMunchies: [20],
    fruitsNdVegetables: [21, 22],
  };

  constructor(private router: Router) {}

  routeTo(data: any) {
    this.router.navigate(['collections', { data }]);
  }
}
