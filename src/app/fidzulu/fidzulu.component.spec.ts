import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidzuluComponent } from './fidzulu.component';

describe('FidzuluComponent', () => {
  let component: FidzuluComponent;
  let fixture: ComponentFixture<FidzuluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidzuluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FidzuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
