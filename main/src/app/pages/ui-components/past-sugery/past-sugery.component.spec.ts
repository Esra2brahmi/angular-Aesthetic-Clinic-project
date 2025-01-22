import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSugeryComponent } from './past-sugery.component';

describe('PastSugeryComponent', () => {
  let component: PastSugeryComponent;
  let fixture: ComponentFixture<PastSugeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastSugeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastSugeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
