import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NotificationModule } from "@progress/kendo-angular-notification";
import { DropDownListModule } from "@progress/kendo-angular-dropdowns";

import {
  GridModule,
  PDFModule,
  ExcelModule
} from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { InputsModule } from "@progress/kendo-angular-inputs";

import { AppComponent } from "./app.component";
import { RatingComponent } from "./rating.component";
import { EditService } from "./edit.service";

import "hammerjs";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridModule,
    ChartsModule,
    InputsModule,
    PDFModule,
    ExcelModule,
    NotificationModule,
    DropDownListModule
  ],
  declarations: [AppComponent, RatingComponent],
  bootstrap: [AppComponent],
  providers: [EditService]
})
export class AppModule {}
