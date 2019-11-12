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
        title: "ID"
      },
      containerType: {
        title: "Container Type"
      },
      owner: {
        title: "Owner"
      },
      description: {
        title: "Description"
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
