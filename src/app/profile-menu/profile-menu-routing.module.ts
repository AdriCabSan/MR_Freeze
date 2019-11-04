import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileMenuComponent } from './profile-menu.component';

const routes: Routes = [
  { path: '', component: ProfileMenuComponent, data: { layout: {
        header: true,
        headerFixed: false,
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
export class ProfileMenuRoutingModule { }
