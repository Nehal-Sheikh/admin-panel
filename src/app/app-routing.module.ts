import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { ProductsListComponent } from './components/product/products-list/products-list.component';

const routes: Routes = [
  { path: '', component:  DashboardComponent},

  { path: 'user-list', component:  UsersListComponent},

  { path: 'product-list', component:  ProductsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
