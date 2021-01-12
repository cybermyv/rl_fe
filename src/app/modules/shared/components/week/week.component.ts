import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  week = [
    {
      id: 1,
      day: 'Пн.',
      date: '11.01.2021'
    },
    {
      id: 2,
      day: 'Вт.',
      date: '12.01.2021'
    },
    {
      id: 3,
      day: 'Ср.',
      date: '13.01.2021'
    },
    {
      id: 4,
      day: 'Чт.',
      date: '14.01.2021'
    },
    {
      id: 5,
      day: 'Пт.',
      date: '15.01.2021'
    },
    {
      id: 6,
      day: 'Суб.',
      date: '16.01.2021'
    },
    {
      id: 7,
      day: 'Вс.',
      date: '17.01.2021'
    }
  ];

  weekId = 1;

  constructor() { }

  ngOnInit() {
  }

}
