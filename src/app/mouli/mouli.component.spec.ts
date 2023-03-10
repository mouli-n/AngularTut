import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouliComponent } from './mouli.component';

describe('MouliComponent', () => {
  let component: MouliComponent;
  let fixture: ComponentFixture<MouliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
