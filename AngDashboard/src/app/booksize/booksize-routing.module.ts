import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbooksizeComponent } from './addbooksize/addbooksize.component';
import { BooksizelistComponent } from './booksizelist/booksizelist.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {path:'addbooksize',component:AddbooksizeComponent},
      {path:'booksizelist',component:BooksizelistComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksizeRoutingModule { }
