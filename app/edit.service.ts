import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { NotificationService } from "@progress/kendo-angular-notification";

import { tap, map } from "rxjs/operators";

const CREATE_ACTION = "create";
const UPDATE_ACTION = "update";
const REMOVE_ACTION = "destroy";

@Injectable()
export class EditService{ // extends BehaviorSubject<any[]> {
  constructor(private notificationService: NotificationService) {
  }
  public save(data: any, isNew?: boolean) {
    this.notificationService.show({
      content: "Your data has been saved. Time for tea!",
      cssClass: "button-notification",
      animation: { type: "slide", duration: 400 },
      position: { horizontal: "center", vertical: "bottom" },
      type: { style: "success", icon: true },
      closable: true
    });
  }

    public remove(data: any) {
    this.notificationService.show({
      content: "Your record has been removed!",
      cssClass: "button-warning",
      animation: { type: "slide", duration: 400 },
      position: { horizontal: "center", vertical: "bottom" },
      type: { style: "warning", icon: true },
      closable: true
    });
  }
}



