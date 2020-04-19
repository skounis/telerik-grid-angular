import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridDataResult, GridComponent, PageChangeEvent } from '@progress/kendo-angular-grid';
import { process } from "@progress/kendo-data-query";


@Component({
  selector: 'licences-details',
  providers: [],
  template: `
      <kendo-grid
          [data]="data"
          kendoGridFocusable
        >
      <kendo-grid-column field="id" title="Product ID" width="120">
      </kendo-grid-column>
      <kendo-grid-column field="name" title="Product Name">
      </kendo-grid-column>
      <kendo-grid-column field="price" title="Unit Price" format="{0:c}">
      </kendo-grid-column>
      </kendo-grid>
  `
})
export class LicencesDetailsComponent implements OnInit {

  /**
   * The category for which details are displayed
   */
  @Input() public category: Object;

  public view: Observable<GridDataResult>;
  public skip = 0;
  public data: any[];

  constructor() { }

  public ngOnInit(): void {
    this.data = [
      {
        id: 1,
        name: "Foo",
        price: 1070,
      },
      {
        id: 2,
        name: "Bar",
        price: 850,
      },
      {
        id: 3,
        name: "Buzz",
        price: 1300,
      },

    ];
  }
}
