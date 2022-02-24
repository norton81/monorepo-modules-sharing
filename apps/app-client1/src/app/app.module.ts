import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { DynamicComponentsResolver } from './dynamic-component-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Feature2Module } from './app1/feature2/feature2.module';
import { App1Module } from './app1/app1.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    App1Module
  ],
  providers: [
    {provide: 'DEPENDENCY_RESOLVER', useClass: DynamicComponentsResolver},
    {provide: 'HOST_NAME', useValue: 'http://localhost:12345'}
],
  bootstrap: [AppComponent],
})
export class AppModule {}
