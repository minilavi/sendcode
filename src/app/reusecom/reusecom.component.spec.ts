import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusecomComponent } from './reusecom.component';

describe('ReusecomComponent', () => {
  let component: ReusecomComponent;
  let fixture: ComponentFixture<ReusecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusecomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
