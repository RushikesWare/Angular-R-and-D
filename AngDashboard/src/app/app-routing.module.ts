import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageZoomComponent } from'./image-zoom/image-zoom.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'auth' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) },
  {
    path: 'layout', component: LayoutComponent,
    children: [
      {path: '', component:DashboardComponent},
      { path: '', loadChildren: () => import('./booksize/booksize.module').then(mod=> mod.BooksizeModule)},
      {path:'imagezoom',component:ImageZoomComponent}

 
   
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
