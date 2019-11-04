import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-container-search',
  templateUrl: './container-search.component.html',
  styleUrls: ['./container-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerSearchComponent implements OnInit {
  source =   [
    {
      "id": 20,
      "containerType": "Fridge",
      "owner": "Soriana",
      "description": "Contiene jamón y queso"
    },
    
  ];
  settings =   {
    "columns": {
      "id": {
        "title": "ID",
        "filter": true,
        "editable": false
      },
      "containerType": {
        "title": "Container Type",
        "filter": true
      },
      "owner": {
        "title": "Owner",
        "filter": true
      },
      "description": {
        "title": "Description",
        "filter": true
      }
    },
    "delete": {
      "confirmDelete": true
    },
    "add": {
      "confirmCreate": true
    },
    "edit": {
      "confirmSave": true
    },
    "actions": {
      "add": true,
      "edit": true,
      "delete": true
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
