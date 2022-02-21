import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Component } from "./app1.component";
import { App1RotingModule } from "./app1-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicComponentsResolver } from '../dynamic-component-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    App1RotingModule,
    ReactiveFormsModule,
  ],
  declarations: [App1Component]
})
export class App1Module { }
