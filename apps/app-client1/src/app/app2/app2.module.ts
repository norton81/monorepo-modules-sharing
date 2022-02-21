import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2Component } from "./app2.component";
import { Area2RotingModule } from "./app2-routing.module";

@NgModule({
  imports: [
    CommonModule,
    Area2RotingModule
  ],
  declarations: [App2Component]
})
export class App2Module { }
