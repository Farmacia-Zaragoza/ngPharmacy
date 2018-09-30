import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'toolbox-modal',
  templateUrl: './toolbox-modal.component.html',
  styleUrls: ['./toolbox-modal.component.css'],
  host: { '[class.visible]': 'display' }
})
export class ToolboxModalComponent implements OnInit {
  fontSize = 14;

  display: boolean = false;

  constructor(private renderer: Renderer2) { }

  show() {
    //backdrop init
    this.renderer.addClass(document.body, 'backdrop');


    //change class to init the modal
    this.display = true;

  }

  hide() {
    this.display = false;
    this.renderer.removeClass(document.body, 'backdrop')
  }

  increaseFontsize() {
    this.fontSize++;
    this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}px`)
  }

  decreaseFontsize() {
    this.fontSize--;
    this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}px`)
  }

  ngOnInit() {

  }

}
