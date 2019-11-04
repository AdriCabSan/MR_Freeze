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
      "container_id": 20,
      "name": "Johnston County Hams",
      "description": "Johnston County Hams Whole Bone-in Prosciutto Style Country Ham",
      "epc":"818229787899",
      "wasteStatus": "disposed",
      "maxTemperature": 32,
      "maxHumidity": 54
    },
    {
      "id": 2,
      "container_id": 20,
      "name": "Henning's Wisconsin Cheese",
      "description": "Henning's Wisconsin Cheese, Farmers Cheese",
      "epc":"018482300006",
      "wasteStatus": "active",
      "maxTemperature": 23,
      "maxHumidity": 45
    },
    
  ];
  settings =   {
    "columns": {
      "id": {
        "title": "ID",
        "type": 'html',
        "editable": false
      },
      "container_id": {
        "title": "Container_ID",
        "type": 'html',
        "editable": false
      },
      "name": {
        "title": "Name",
        "type": 'html',
        "editable": true
      },
      "description": {
        "title": "Description",
        "type": 'html',
        "editable": true
      },
      "epc": {
        "title": "EPC",
        "type": 'html',
        "editable": true
      },
      "wasteStatus": {
        "title": "Waste Status",
        "type": 'html',
        "editable": true
      },
      "maxTemperature": {
        "title": "Max Temperature",
        "type": 'html',
        "editable": true
      },
      "maxHumidity": {
        "title": "Max Humidity",
        "type": 'html',
        "editable": true
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
