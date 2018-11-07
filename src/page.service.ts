import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PageService {

  jsonUrl: string;
  done = new EventEmitter();
  public content: any;

  constructor(private http: Http, @Inject('AppData') private appData) {
    this.jsonUrl = appData.json_path + appData.lang + '/' + appData.json_file;
    console.log(this.jsonUrl)
    this.getPageContent()

  }

  getPageContent() {
    return this.http.get(this.jsonUrl)
      .subscribe((res) => {
        this.content = res.json()
        this.done.emit(this.content)
      }, error => {
        alert('something went wrong! see console for details.')
        console.log(error.json())
      })
  }



}
