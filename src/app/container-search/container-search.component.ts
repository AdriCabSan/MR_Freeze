import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-container-search',
  templateUrl: './container-search.component.html',
  styleUrls: ['./container-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerSearchComponent implements OnInit {
  settings = {
    columns: {
      id: {
        title: "ID",
        filter: true
      },
      containerType: {
        title: "Container Type",
        filter: true
      },
      owner: {
        title: "Owner",
        filter: true
      },
      description: {
        title: "Description",
        filter: true
      }
    }
  };

  //Default data
  data = [
    {
      id: 10,
      containerType: "Fridge",
      owner: "Soriana",
      description: "At the moment, it just contains ham and cheese"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
