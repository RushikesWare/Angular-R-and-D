import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-booksizelist',
  templateUrl: './booksizelist.component.html',
  styleUrls: ['./booksizelist.component.css']
})
export class BooksizelistComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

   
}
