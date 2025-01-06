import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollectionsComponent } from './collections/collections.component';
import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderCompletionComponent } from './order-completion/order-completion.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', component: AppComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: 'success', component: OrderCompletionComponent },
  { path: 'product/:category/:productId', component: SingleProductComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
})
export class AppRoutingModule {}
