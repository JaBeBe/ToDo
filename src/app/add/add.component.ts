import { Task } from './../Models/task';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  task: string;

  constructor(private taskServ: TaskService) { }

  ngOnInit() {
  }
  addTask() {
    const getTask: Task = ({ name: this.task, created: new Date() });
    this.taskServ.addTask(getTask);
    this.task = '';
  }

}
