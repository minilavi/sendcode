import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NEWComponent } from './new.component';

describe('NEWComponent', () => {
  let component: NEWComponent;
  let fixture: ComponentFixture<NEWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NEWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NEWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
