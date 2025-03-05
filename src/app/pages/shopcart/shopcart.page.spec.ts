import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopcartPage } from './shopcart.page';

describe('ShopcartPage', () => {
  let component: ShopcartPage;
  let fixture: ComponentFixture<ShopcartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
