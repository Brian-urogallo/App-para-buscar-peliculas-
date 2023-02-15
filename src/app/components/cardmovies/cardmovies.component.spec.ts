import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmoviesComponent } from './cardmovies.component';

describe('CardmoviesComponent', () => {
  let component: CardmoviesComponent;
  let fixture: ComponentFixture<CardmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardmoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
