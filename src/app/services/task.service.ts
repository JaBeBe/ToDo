import { Task } from './../Models/task';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private toDoList: Array<Task> = [];
  private doneList: Array<Task> = [];

  private toDoEmit = new BehaviorSubject<Array<Task>>([]);
  private doneEmit = new BehaviorSubject<Array<Task>>([]);

  constructor() { }

  addTask(task: Task) {
    this.toDoList.push(task);
    this.toDoEmit.next(this.toDoList);
  }
  doneTask(task: Task) {
    this.doneList.push(task);
    this.toDoList = this.toDoList.filter(e => e !== task);
    this.toDoEmit.next(this.toDoList);
    this.doneEmit.next(this.doneList);
  }
  removeTask(task: Task) {
    this.toDoList = this.toDoList.filter(e => e !== task);
    this.toDoEmit.next(this.toDoList);
  }

  getToDoList(): Observable<Array<Task>> {
    return this.toDoEmit.asObservable();
  }

  getDoneList(): Observable<Array<Task>> {
    return this.doneEmit.asObservable();
  }
}
