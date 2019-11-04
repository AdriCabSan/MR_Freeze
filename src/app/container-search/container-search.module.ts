import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerSearchRoutingModule } from './container-search-routing.module';
import { ContainerSearchComponent } from './container-search.component';
import { Space61Component } from './space61/space61.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContainerSearchComponent, Space61Component],
  imports: [
    CommonModule,
    ContainerSearchRoutingModule,
    SharedModule
  ]
})
export class ContainerSearchModule { }
