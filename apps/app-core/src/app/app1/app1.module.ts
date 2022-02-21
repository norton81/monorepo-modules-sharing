import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Component } from "./app1.component";
import { App1RotingModule } from "./app1-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    App1RotingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [App1Component]
})
export class App1Module { }
