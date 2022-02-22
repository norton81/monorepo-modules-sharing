import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Feature4Component} from "./feature4.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [Feature4Component]
})
export class Feature4Module { }
