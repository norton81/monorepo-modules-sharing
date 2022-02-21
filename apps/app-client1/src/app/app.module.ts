import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { DynamicComponentsResolver } from './dynamic-component-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  {provide: 'DEPENDENCY_RESOLVER', useClass: DynamicComponentsResolver}
],
  bootstrap: [AppComponent],
})
export class AppModule {}
