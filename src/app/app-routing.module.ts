import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Profile', loadChildren: './profile-menu/profile-menu.module#ProfileMenuModule' },
  { path: 'prod-search', loadChildren: './products-search/products-search.module#ProductsSearchModule' },
  { path: 'contain-search', loadChildren: './container-search/container-search.module#ContainerSearchModule' },
  { path: 'ContainerDahsboard', loadChildren: './container-dahsboard/container-dahsboard.module#ContainerDahsboardModule' },
  { path: '', redirectTo: 'Profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
