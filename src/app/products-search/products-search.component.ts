import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSearchComponent implements OnInit {
  settings =   {
    columns: {
      id: {
        title: "ID"
      },
      container_id: {
        title: "Container ID"
      },
      name: {
        title: "Name"
      },
      description: {
        title: "Description"
      },
      epc: {
        title: "EPC"
      },
      wasteStatus: {
        title: "Waste Status"
      },
      maxTemperature: {
        title: "Max. Temperature"
      },
      maxHumidity: {
        title: "Max. Humidity"
      }
    }
  };

  //Default data
  data = [
    {
      id: 1,
      container_id: 10,
      name: "Johnston County Hams",
      description: "Johnston County Hams Whole Bone-in Prosciutto Style Country Ham",
      epc:"818229787899",
      wasteStatus: "disposed",
      maxTemperature: 32,
      maxHumidity: 54
    },
    {
      id: 2,
      container_id: 10,
      name: "Henning's Wisconsin Cheese",
      description: "Henning's Wisconsin Cheese, Farmers Cheese",
      epc:"018482300006",
      wasteStatus: "active",
      maxTemperature: 23,
      maxHumidity: 45
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
