import { Component, OnInit } from '@angular/core';

enum Mark {
  ToDo = "todo",
  Done = "done",
  Transfet = "transfer",
  Cancel = "cancel",
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

 

  tasks = [
    {
    id: 1,
    weekId: 1,
    dayId: 1,
    canceled: false,
    createDate: '11.01.2021',
    completeDate: null,
    mark: Mark.Done,
    task: 'Первая задача -  понедельник Первая задача -  понедельник Первая задача -  понедельник Первая задача -  понедельник' 
  },
  {
    id: 2,
    weekId: 1,
    dayId: 2,
    canceled: false,
    createDate: '12.01.2021',
    completeDate: null,
    mark: Mark.ToDo,
    task: 'Вторая задача - вторник'
  },
  {
    id: 3,
    weekId: 1,
    dayId: 1,
    canceled: false,
    createDate: '11.01.2021',
    completeDate: null,
    mark: Mark.Transfet,
    task: 'Треть задача - понедельник'
  },
  {
    id: 4,
    weekId: 1,
    dayId: 3,
    canceled: false,
    createDate: '13.01.2021',
    completeDate: null,
    mark: Mark.Cancel,
    task: 'Четвертая задача - четверг'
  }


];

  constructor() { }

  ngOnInit() {
  }

  onSelect(event, task) {
    console.log(event.dataset.day, event.dataset.value);
    // console.log(event);
  }

}
