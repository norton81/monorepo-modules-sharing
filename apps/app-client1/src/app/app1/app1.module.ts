import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Feature2Module } from './feature2/feature2.module';
import { Feature3Module } from './feature3/feature3.module';
import { Feature4Module } from './feature4/feature4.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Feature2Module,
    Feature3Module,
    Feature4Module,
  ],
  declarations: []
})
export class App1Module { }
