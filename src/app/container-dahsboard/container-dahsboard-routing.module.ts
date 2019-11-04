import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerDahsboardComponent } from './container-dahsboard.component';

const routes: Routes = [
  { path: '', component: ContainerDahsboardComponent, data: { layout: {
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
export class ContainerDahsboardRoutingModule { }
