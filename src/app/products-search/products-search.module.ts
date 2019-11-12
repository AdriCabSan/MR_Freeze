import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsSearchRoutingModule } from './products-search-routing.module';
import { ProductsSearchComponent } from './products-search.component';
import { Space6Component } from './space6/space6.component';
import { SharedModule } from '../shared/shared.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [ProductsSearchComponent, Space6Component],
  imports: [
    CommonModule,
    ProductsSearchRoutingModule,
    SharedModule,
    Ng2SmartTableModule
  ]
})
export class ProductsSearchModule { }
