import { Injectable, Inject, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
declare var window: any;

@Injectable()
export class PageService {
  pageContentUrl: string;
  commonDataUrl: string;
  langCommonDataUrl: string;

  done = new EventEmitter();

  private globalCommonDataSource = new BehaviorSubject({});
  globalCommon = this.globalCommonDataSource.asObservable();

  private langCommonDataSource = new BehaviorSubject({});
  _LangCommon = this.langCommonDataSource.asObservable();

  public content: any;

  constructor(private http: Http, @Inject("AppData") private appData) {
    this.pageContentUrl = `${appData.json_path}langs/${appData.lang}/${
      appData.json_file
    }`;
    this.commonDataUrl = appData.json_path + "common.json";
    this.langCommonDataUrl = `${appData.json_path}langs/${
      appData.lang
    }/common.json`;
    console.log(window.location.hostname);
    this.getPageContent();
    this.getGlobalCommonData();
    this.getLangCommonData();
  }

  getGlobalCommonData() {
    return this.http.get(this.commonDataUrl).subscribe(res => {
      this.globalCommonDataSource.next(res.json());
    });
  }

  getLangCommonData() {
    return this.http.get(this.langCommonDataUrl).subscribe(res => {
      this.langCommonDataSource.next(res.json());
    });
  }

  getPageContent() {
    return this.http.get(this.pageContentUrl).map(
      res => {
        this.content = res.json();
        this.done.emit(this.content);
        return this.content;
      },
      error => {
        alert("something went wrong! see console for details.");
        console.log(error.json());
      }
    );
  }
}
