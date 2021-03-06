import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsSearchComponent } from './products-search.component';

const routes: Routes = [
  { path: '', component: ProductsSearchComponent, data: { layout: {
        header: true,
        headerFixed: true,
        sidebar: true,
        sidebarFixed: false,
        paddings: {
          paddingTop: 16,
          paddingRight: 16,
          paddingBottom: 16,
          paddingLeft: 16
        }
      }
    }
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsSearchRoutingModule { }
