import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestflightComponent } from './testflight.component';

describe('TestflightComponent', () => {
  let component: TestflightComponent;
  let fixture: ComponentFixture<TestflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
