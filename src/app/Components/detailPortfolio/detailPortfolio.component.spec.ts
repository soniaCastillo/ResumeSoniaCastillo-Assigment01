/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailPortfolioComponent } from './detailPortfolio.component';

describe('DetailPortfolioComponent', () => {
  let component: DetailPortfolioComponent;
  let fixture: ComponentFixture<DetailPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
