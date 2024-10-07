import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCaninosComponent } from './main-caninos.component';

describe('MainCaninosComponent', () => {
  let component: MainCaninosComponent;
  let fixture: ComponentFixture<MainCaninosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCaninosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCaninosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
