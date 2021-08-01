import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbooksizeComponent } from './addbooksize.component';

describe('AddbooksizeComponent', () => {
  let component: AddbooksizeComponent;
  let fixture: ComponentFixture<AddbooksizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbooksizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbooksizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
