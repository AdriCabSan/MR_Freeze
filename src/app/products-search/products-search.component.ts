import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSearchComponent implements OnInit {
  source =   [
    {
      "id": 1,
      "container_id": "Danielle Kennedy",
      "name": "danielle.kennedy",
      "description": "danielle_91@example.com"
    },
    {
      "id": 2,
      "container_id": "Russell Payne",
      "name": "russell.payne",
      "description": "russell_88@example.com"
    },
    {
      "id": 3,
      "container_id": "Brenda Hanson",
      "name": "brenda.hanson",
      "description": "brenda97@example.com"
    },
    {
      "id": 4,
      "container_id": "Nathan Knight",
      "name": "nathan.knight",
      "description": "nathan-85@example.com"
    }
  ];
  settings =   {
    "columns": {
      "id": {
        "title": "ID"
      },
      "container_id": {
        "title": "Container_ID"
      },
      "name": {
        "title": "Name"
      },
      "description": {
        "title": "Description"
      },
      "epc": {
        "title": "EPC"
      },
      "wasteStatus": {
        "title": "Waste Status"
      },
      "maxTemperature": {
        "title": "Max Temperature"
      },
      "maxHumidity": {
        "title": "Max Humidity"
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
