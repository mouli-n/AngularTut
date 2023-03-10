import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAngularComponent } from './todo-angular.component';

describe('TodoAngularComponent', () => {
  let component: TodoAngularComponent;
  let fixture: ComponentFixture<TodoAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
