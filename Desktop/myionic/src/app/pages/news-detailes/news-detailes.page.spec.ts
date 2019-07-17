import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailesPage } from './news-detailes.page';

describe('NewsDetailesPage', () => {
  let component: NewsDetailesPage;
  let fixture: ComponentFixture<NewsDetailesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDetailesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsDetailesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
