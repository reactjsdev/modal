import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  display = 'none';

  constructor() { }

  ngOnInit() {
  }

  openModalDialog() {
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }

  onCloseHandled () {
    this.display = 'none';
  }

  test () {
    console.log('close backdrop');
  }

}
