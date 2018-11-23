import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
declare var window: any;

@Injectable()
export class PageService {

  pageContentUrl: string;
  commonDataUrl: string;
  done = new EventEmitter();
  public content: any;

  constructor(private http: Http, @Inject('AppData') private appData) {
    this.pageContentUrl = appData.json_path + "langs/" + appData.lang + '/' + appData.json_file;
    this.commonDataUrl = appData.json_path + 'common.json';
    console.log(window.location.hostname)
    this.getPageContent();
    this.getCommonData().subscribe();

  }

  getCommonData() {
    return this.http.get(this.commonDataUrl)
      .map(res => {
        // console.log(res.json());
        return res.json();
      })
  }

  getPageContent() {
    return this.http.get(this.pageContentUrl)
      .map((res) => {
        this.content = res.json()
        this.done.emit(this.content)
        return this.content;
      }, error => {
        alert('something went wrong! see console for details.')
        console.log(error.json())
      })
  }



}
