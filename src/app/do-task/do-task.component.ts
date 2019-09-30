import { TaskService } from "./../services/task.service";
import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../Models/task";

@Component({
  selector: "app-do-task",
  templateUrl: "./do-task.component.html",
  styleUrls: ["./do-task.component.css"]
})
export class DoTaskComponent implements OnInit {
  doneList: Array<Task> = [];
  constructor(private taskServ: TaskService) {
    this.taskServ.getDoneList().subscribe((list: Array<Task>) => {
      this.doneList = list.slice();
    });
  }

  ngOnInit() {}
}
