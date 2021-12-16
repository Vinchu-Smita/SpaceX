import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchModelBoxComponent } from './launch-model-box.component';

describe('LaunchModelBoxComponent', () => {
  let component: LaunchModelBoxComponent;
  let fixture: ComponentFixture<LaunchModelBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchModelBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchModelBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
