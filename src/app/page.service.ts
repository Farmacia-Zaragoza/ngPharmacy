import { Injectable, Inject, EventEmitter } from "@angular/core";
import { Http } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/forkJoin";

declare var window: any;

@Injectable()
export class PageService {
  common_json_url: string;
  lang_common_json_url: string;
  spec_json_url: string;
  lang_spec_json_url: string;

  allData: any;

  done = new EventEmitter();

  globalCommonDataSource = new BehaviorSubject({});
  globalCommon = this.globalCommonDataSource.asObservable();

  langCommonDataSource = new BehaviorSubject({});
  _LangCommon = this.langCommonDataSource.asObservable();

  public content: {};

  constructor(private http: Http, @Inject("AppData") private appData) {
    this.common_json_url = appData.common_json;
    this.spec_json_url = appData.spec_json;
    this.lang_common_json_url = appData.lang_common_json;
    this.lang_spec_json_url = appData.lang_spec_json;

    console.log(window.location.hostname);
    // this.getPageContent();
    // this.getGlobalCommonData();
    // this.getLangCommonData();
    this.requestDataFromMultipleSources().subscribe(res => {
      this.allData = {
        common_json: res[0].json(),
        spec_json: res[1].json(),
        lang_common_json: res[2].json(),
        lang_spec_json: res[3].json()
      };

      console.log(this.allData);
      this.done.emit(this.allData);
    });
  }

  public requestDataFromMultipleSources(): Observable<any[]> {
    let response1 = this.http.get(this.common_json_url);
    let response2 = this.http.get(this.spec_json_url);
    let response3 = this.http.get(this.lang_common_json_url);
    let response4 = this.http.get(this.lang_spec_json_url);
    return Observable.forkJoin([response1, response2, response3, response4]);
  }

  getGlobalCommonData() {
    return this.http.get(this.common_json_url).subscribe(res => {
      this.globalCommonDataSource.next(res.json());
    });
  }

  getLangCommonData() {
    return this.http.get(this.lang_common_json_url).subscribe(res => {
      this.langCommonDataSource.next(res.json());
    });
  }

  getPageContent() {
    return this.http.get(this.spec_json_url).map(
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
