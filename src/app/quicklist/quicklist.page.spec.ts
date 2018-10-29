import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklistPage } from './quicklist.page';

describe('QuicklistPage', () => {
  let component: QuicklistPage;
  let fixture: ComponentFixture<QuicklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicklistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
