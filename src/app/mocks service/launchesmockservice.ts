import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from "rxjs";
import { Observable } from 'rxjs';
// import { Launches } from './launches.model';


export class launchesmockservice {
  // getValue: any;
 

 
  getlaunchesData(start?:string,end?:string){
    return of(true)

    // + `offset=${offset}&limit=${limit}`
    }
    // getlaunchesData1(id:any){
    //   return this.http.get<Launches[]>(
    //     this.url
    //   );
     







  

}