import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Option1 } from './option-1';

describe('Option1', () => {
  let component: Option1;
  let fixture: ComponentFixture<Option1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Option1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Option1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
