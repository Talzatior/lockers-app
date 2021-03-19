import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locker-back-female',
  templateUrl: './locker-back-female.component.html',
  styleUrls: ['./locker-back-female.component.scss']
})
export class LockerBackFemaleComponent implements OnInit {

  checked: boolean = true;
  showSection: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showButton() {
    this.showSection = false;
  }

  cancelButton() {
    this.showSection = true;
    this.checked = true;
  }

  handleChangeSection(e) {
    this.showSection = e.checked;
  }

  // Show / Hide adding section form
  on: boolean = true;
  showHide(e) {
    var isChecked = e.checked;
    if (isChecked === false) {
    this.showButton();
    }
    else {
      this.cancelButton();
    }
  }
}
