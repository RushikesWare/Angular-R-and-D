import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksizelistComponent } from './booksizelist.component';

describe('BooksizelistComponent', () => {
  let component: BooksizelistComponent;
  let fixture: ComponentFixture<BooksizelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksizelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksizelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
