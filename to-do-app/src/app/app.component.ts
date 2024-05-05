import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodostwoComponent } from './MyComponents/todostwo/todostwo.component';
import { TodosthreeComponent } from './MyComponents/todosthree/todosthree.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodostwoComponent, TodosthreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-app';
  constructor(){
    setTimeout(() => {
      this.title = "changed title to bye"
    }, 2000);

    const button = document.querySelectorAll(".spam-b")
    console.log(button)
    
  }

  
}
