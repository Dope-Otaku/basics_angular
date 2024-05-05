import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todostwo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todostwo.component.html',
  styleUrl: './todostwo.component.css'
})
export class TodostwoComponent {

  todos:Todo[];
  constructor(){
    this.todos = [
      {
        sno:1,
        title: "this is title",
        desc: "Descritpion",
        active : true
      },
      {
        sno:2,
        title: "this is title",
        desc: "Descritpion",
        active : true
      },
      {
        sno:3,
        title: "this is title",
        desc: "Descritpion",
        active : true
      }
    ]
  }
}
