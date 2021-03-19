import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spare-key-out-woman',
  templateUrl: './spare-key-out-woman.component.html',
  styleUrls: ['./spare-key-out-woman.component.scss']
})
export class SpareKeyOutWomanComponent implements OnInit {

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
