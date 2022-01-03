import { HttpClient ,HttpClientModule} from '@angular/common/http';
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
  url:string="https://api.spacexdata.com/v3/launches"
  getlaunchesData(start?:string,end?:string){
    if(start===undefined ){
      return this.http.get<Launches[]>(
        'https://api.spacexdata.com/v3/launches'
      );
    }else{
      return this.http.get<Launches[]>(
        `https://api.spacexdata.com/v3/launches?start=${start}&end=${end}`
      )
    }
   
   
    // + `offset=${offset}&limit=${limit}`
    }
    // getlaunchesData1(id:any){
    //   return this.http.get<Launches[]>(
    //     this.url
    //   );
     
 //service for upcoming and past launches
 FilterLaunch(collectionname:any){
  console.log("Fetch data from api");
  var ans=this.http.get(this.url+"/"+collectionname);
return(ans);
 }
 //service for success ,fail & launches & fetch date data
 FilterCond(collectionname:any){
  console.log("Fetch data from api");
  var ans=this.http.get(this.url+"?"+collectionname);
return(ans);
 }


 failed(start?:string,end?: string){
  if(start === undefined)
  {
  return this.http.get<Launches[]>(`https://api.spacexdata.com/v3/launches?launch_success=false&upcoming=false`);
 }else 
  {
 return this.http.get<Launches[]>(`https://api.spacexdata.com/v3/launches?start=${start}&end=${end}&launch_success=false&upcoming=false`)
 }
 
  
}
success(start?:string,end?: string){
  if(start === undefined)
  {
  return this.http.get<Launches[]>('https://api.spacexdata.com/v3/launches?launch_success=true');
 }else 
  {
 return this.http.get<Launches[]>(`https://api.spacexdata.com/v3/launches?start=${start}&end=${end}&launch_success=true`)
 }
}

upcoming(start?:string,end?: string){
if(start === undefined)
{
return this.http.get<Launches[]>('https://api.spacexdata.com/v3/launches/upcoming');
}else 
{
return this.http.get<Launches[]>(`https://api.spacexdata.com/v3/launches/upcoming?start=${start}&end=${end}`)
}
// (`https://api.spacexdata.com/v3/launches/upcoming?start=${start}&end=${end}`)
}
// all(start?:string,end?: string){
// if(start === undefined)
// {
// return this.http.get<Launches[]>('https://api.spacexdata.com/v3/launches');
// }else 
// {
// return this.http.get<Launches[]>(`https://api.spacexdata.com/v3/launches`)
// }
//   }
  
all(start?:string,end?: string){
  if(start === undefined)
  {
  return this.http.get<Launches[]>('https://api.spacexdata.com/v3/launches');
 }else 
  {
 return this.http.get<Launches[]>(`https://api.spacexdata.com/v3/launches?launch_success=false&launch_success=true`)
 }
}
}