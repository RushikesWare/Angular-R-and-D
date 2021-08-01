import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksizeRoutingModule } from './booksize-routing.module';
import { AddbooksizeComponent } from './addbooksize/addbooksize.component';
import { BooksizelistComponent } from './booksizelist/booksizelist.component';
import { MatPaginatorModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDatepickerModule, MatSelectModule, MatAutocompleteModule, MatSlideToggleModule, MatProgressSpinnerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule, MatSidenavModule, MatDividerModule, MatDialogModule, MatButtonModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BooksizeComponent } from './booksize.component';


@NgModule({
  declarations: [AddbooksizeComponent, BooksizelistComponent, BooksizeComponent],
  imports: [
    CommonModule,
    BooksizeRoutingModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule, 
    MatDatepickerModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonModule,
    MatDialogModule, 
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule, 
  ]
})
export class BooksizeModule { }
