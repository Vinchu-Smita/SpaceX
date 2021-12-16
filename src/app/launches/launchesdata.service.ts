import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Observable } from 'rxjs';
import { Launches } from './launches.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchesdataService {

  constructor(private http: HttpClient) { }
  list: Launches[] = [];
  // nrOfFlights: Subject<number> = new Subject<number>();
  data: Subject<Launches[]> = new Subject<Launches[]>();
  url:string="https://api.spacexdata.com/v3/launches/"
  getlaunchesData(){
    return this.http.get<Launches[]>(
      this.url
    );
   
    // + `offset=${offset}&limit=${limit}`
    }
    postData(keyName:any,Data:any){
      console.log(keyName);
      console.log(Data);
      var path =this.url+keyName;
      console.log(path);
       var result = this.http.post(path,Data)
    return result;
      }
      putData(Data:any){
        // console.log(keyName);
        console.log(Data);
        var path =this.url;
        console.log(path);
         var result = this.http.put(path,Data)
      return result;
        }
  }
  
  

