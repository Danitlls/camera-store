import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { AdminComponent } from './admin/admin.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

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
  path:'item-detail',
  component: ItemDetailComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
