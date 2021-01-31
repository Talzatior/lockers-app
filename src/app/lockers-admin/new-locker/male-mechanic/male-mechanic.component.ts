import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-male-mechanic',
  templateUrl: './male-mechanic.component.html',
  styleUrls: ['./male-mechanic.component.scss']
})
export class MaleMechanicComponent implements OnInit {

  lockerNumber = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
