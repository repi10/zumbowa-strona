import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsTextComponent } from './reviews-text.component';

describe('ReviewsTextComponent', () => {
  let component: ReviewsTextComponent;
  let fixture: ComponentFixture<ReviewsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
