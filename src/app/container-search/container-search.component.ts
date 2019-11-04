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
      "id": 1,
      "containerType": "Danielle Kennedy",
      "owner": "danielle.kennedy",
      "description": "danielle_91@example.com"
    },
    {
      "id": 2,
      "containerType": "Russell Payne",
      "owner": "russell.payne",
      "description": "russell_88@example.com"
    },
    {
      "id": 3,
      "containerType": "Brenda Hanson",
      "owner": "brenda.hanson",
      "description": "brenda97@example.com"
    },
    {
      "id": 4,
      "containerType": "Nathan Knight",
      "owner": "nathan.knight",
      "description": "nathan-85@example.com"
    }
  ];
  settings =   {
    "columns": {
      "id": {
        "title": "ID",
        "filter": true
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
