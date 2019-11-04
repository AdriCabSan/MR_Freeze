import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerDahsboardRoutingModule } from './container-dahsboard-routing.module';
import { ContainerDahsboardComponent } from './container-dahsboard.component';
import { Card1Component } from './card1/card1.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContainerDahsboardComponent, Card1Component],
  imports: [
    CommonModule,
    ContainerDahsboardRoutingModule,
    SharedModule
  ]
})
export class ContainerDahsboardModule { }
