import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NotificationModule } from '@progress/kendo-angular-notification';
import { LicencesDetailsComponent } from './licences-details.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DropDownListModule } from "@progress/kendo-angular-dropdowns";
import { LayoutModule } from '@progress/kendo-angular-layout';

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
    LayoutModule,
    DropDownListModule
  ],
  declarations: [AppComponent, RatingComponent, LicencesDetailsComponent],
  bootstrap: [AppComponent],
  providers: [EditService]
})
export class AppModule {}
