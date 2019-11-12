import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  menuItems: NbMenuItem[] = [
  
    {
      title: 'Profile Menu',
      link: '/Profile',
      children: null
    },
    {
      title: 'Products Search',
      link: '/prod-search',
      children: null
    },
    {
      title: 'Container Search',
      link: '/contain-search',
      children: null
    },
    {
      title: 'Container Dashboard',
      link: '/ContainerDahsboard',
      children: null
    }
  ];

}
