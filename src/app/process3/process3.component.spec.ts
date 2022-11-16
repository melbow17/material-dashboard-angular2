import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Process3Component } from './process3.component';

describe('Process3Component', () => {
  let component: Process3Component;
  let fixture: ComponentFixture<Process3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Process3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Process3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
