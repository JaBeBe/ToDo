import { TaskService } from "./../services/task.service";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Task } from "../Models/task";

@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  toDoList: Array<Task> = [];

  constructor(private taskServ: TaskService) {
    this.taskServ.getToDoList().subscribe((list: Array<Task>) => {
      this.toDoList = list.slice();
    });
  }

  ngOnInit() {}

  remove(task: Task) {
    this.taskServ.removeTask(task);
  }
  done(task: Task) {
    task.end = new Date();
    this.taskServ.doneTask(task);
  }
}
