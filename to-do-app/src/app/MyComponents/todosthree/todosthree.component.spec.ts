import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosthreeComponent } from './todosthree.component';

describe('TodosthreeComponent', () => {
  let component: TodosthreeComponent;
  let fixture: ComponentFixture<TodosthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosthreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
