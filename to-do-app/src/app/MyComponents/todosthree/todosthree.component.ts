import { Component, Input } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todosthree',
  standalone: true,
  imports: [],
  templateUrl: './todosthree.component.html',
  styleUrl: './todosthree.component.css'
})
export class TodosthreeComponent {

  @Input() todo!: Todo;
  constructor(){
  }
}
