import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Component } from "./app1.component";
import { App1RotingModule } from "./app1-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FormArray } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    App1RotingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
  declarations: [App1Component]
})
export class App1Module { }
