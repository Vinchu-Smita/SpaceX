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
     



 failed(start?:string,end?: string){
  
 
  
}
success(start?:string,end?: string){
  
}

upcoming(start?:string,end?: string){

// (`https://api.spacexdata.com/v3/launches/upcoming?start=${start}&end=${end}`)
}

  
all(start?:string,end?: string){
  
}
}