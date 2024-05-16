import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestWithDrawComponent } from './request-with-draw.component';

describe('RequestWithDrawComponent', () => {
  let component: RequestWithDrawComponent;
  let fixture: ComponentFixture<RequestWithDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestWithDrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestWithDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
