import { Routes, RouterModule } from '@angular/router';
import { BuybeIndexComponent } from './buybe-index.component';
import { BuybeSpecialComponent } from './buybe-special.component';
import { BuybeProductComponent } from './buybe-product.component';
import { BuybeNewsComponent } from './buybe-news.component';
import { BuybeCategoryComponent } from './buybe-category.component';
import { PageNotFoundComponent } from './buybe-404.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: BuybeIndexComponent
  },
  {
    path: 'special/:id',
    component: BuybeSpecialComponent
  },
  {
    path: 'product/:id',
    component: BuybeProductComponent
  },
  {
    path:'news/:id',
    component: BuybeNewsComponent
  },
  {
    path: 'category/:id',
    component: BuybeCategoryComponent
  },
  { path: '**', component: PageNotFoundComponent }
]

export const routing = RouterModule.forRoot(appRoutes);