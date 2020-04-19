/* tslint:disable:max-line-length */

import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { process } from "@progress/kendo-data-query";
import { NotificationService } from "@progress/kendo-angular-notification";
import { employees } from "./employees";
import { Employee } from "./model";
import { images } from "./images";
import { EditService } from "./edit.service";

@Component({
  selector: "my-app",
  templateUrl: "app.html",
  styleUrls: ["./app.css"]
})
export class AppComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public groups: GroupDescriptor[] = [{ field: "job_title" }];

  public gridData: any[] = employees;
  public gridView: any[];

  public mySelection: string[] = [];

  constructor(
    protected editService: EditService,
    private notificationService: NotificationService
  ) {}

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "full_name",
            operator: "contains",
            value: inputValue
          },
          {
            field: "job_title",
            operator: "contains",
            value: inputValue
          },
          {
            field: "budget",
            operator: "contains",
            value: inputValue
          },
          {
            field: "phone",
            operator: "contains",
            value: inputValue
          },
          {
            field: "address",
            operator: "contains",
            value: inputValue
          }
        ]
      }
    }).data;

    this.dataBinding.skip = 0;
  }

  private photoURL(dataItem: any): string {
    const code: string = dataItem.img_id + dataItem.gender;
    const image: any = images;

    return image[code];
  }

  private flagURL(dataItem: any): string {
    const code: string = dataItem.country;
    const image: any = images;

    return image[code];
  }

  protected editHandler({ sender, rowIndex, dataItem }) {
    // define all editable fields validators and default values
    const group = new FormGroup({
      id: new FormControl(dataItem.id),
      full_name: new FormControl(dataItem.full_name, Validators.required),
      job_title: new FormControl(dataItem.job_title),
      country: new FormControl(dataItem.country),
      is_online: new FormControl(dataItem.is_online),
      rating: new FormControl(dataItem.rating),
      target: new FormControl(dataItem.target),
      budget: new FormControl(dataItem.budget),
      phone: new FormControl(dataItem.phone),
      address: new FormControl(dataItem.address),
      gender: new FormControl(dataItem.gender)
    });
    // put the row in edit mode, with the `FormGroup` build above
    sender.editRow(rowIndex, group);
  }

  protected addHandler({ sender }) {
    // define all editable fields validators and default values
    const group = new FormGroup({
      id: new FormControl(),
      full_name: new FormControl("", Validators.required),
      job_title: new FormControl(""),
      country: new FormControl("US"),
      is_online: new FormControl(false),
      rating: new FormControl(0),
      target: new FormControl(""),
      budget: new FormControl(0),
      phone: new FormControl(""),
      address: new FormControl(""),
      gender: new FormControl("")
    });

    // show the new row editor, with the `FormGroup` build above
    sender.addRow(group);
  }

  protected cancelHandler({ sender, rowIndex }) {
    // close the editor for the given row
    sender.closeRow(rowIndex);
  }

  protected saveHandler({ sender, rowIndex, formGroup, isNew }) {
    // collect the current state of the form
    // `formGroup` arguments is the same as was provided when calling `editRow`
    const product: Employee = formGroup.value;

    // update the data source
    this.editService.save(product, isNew);

    // close the editor, that is, revert the row back into view mode
    sender.closeRow(rowIndex);
  }

  protected removeHandler({ dataItem }) {
    // remove the current dataItem from the current data source,
    // `editService` in this example
    this.editService.remove(dataItem);
  }

  protected hide(column) {
    let items = this.groups.filter(e => {
      return  e.field &&  e.field === column;
    })

    return !!items.length
  }
}
