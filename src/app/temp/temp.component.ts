import { Component, OnInit } from '@angular/core';
import { test } from '../global/global-jquery-methods';
declare var $:any;
@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }

  onClick(event) {
    test(event.target);
  }

  ngOnInit() {
    $("#cbtn").click(function(){
      console.log("test1");
    });

    $("#cbtn").click(function(){
      console.log("test2");
    })
  }

}
