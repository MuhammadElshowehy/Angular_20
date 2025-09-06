import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Option2 } from './option-2';

describe('Option2', () => {
  let component: Option2;
  let fixture: ComponentFixture<Option2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Option2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Option2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
