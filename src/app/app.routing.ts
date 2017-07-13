import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { AdminComponent } from './admin/admin.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
  },
  {
  path:'market-place',
  component: MarketPlaceComponent
  },
  {
  path:'admin',
  component: AdminComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
  path:'product-detail',
  component: ProductDetailComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
