import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes = [
  {
    path: 'app1',
    loadChildren: () => import('./app1/app1.module').then(m => m.App1Module),
  },
  {
    path: 'app2',
    loadChildren: () => import('./app2/app2.module').then(m => m.App2Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }