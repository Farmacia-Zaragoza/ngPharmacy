import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-drop-down',
  templateUrl: './user-drop-down.component.html',
  styleUrls: ['./user-drop-down.component.css']
})
export class UserDropDownComponent implements OnInit {
  isLogedIn = false;

  constructor() { }

  ngOnInit() {
  }

}
