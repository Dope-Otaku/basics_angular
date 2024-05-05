import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodostwoComponent } from './todostwo.component';

describe('TodostwoComponent', () => {
  let component: TodostwoComponent;
  let fixture: ComponentFixture<TodostwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodostwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodostwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
