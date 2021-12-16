import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Launches } from './launches.model';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { LaunchesdataService } from './launchesdata.service';
import { Router } from '@angular/router';
import{ MatTableDataSource} from '@angular/material/table';
// import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { LaunchModelBoxComponent } from '../launch-model-box/launch-model-box.component';
// import { MatDialogModule } from '@angular/material/dialog';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// const ELEMENT_DATA: [] = [

// ];
@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  //calender data
  selected:any= { startDate: moment, endDate: moment }
alwaysShowCalendars: boolean;
ranges: any = {
  'Today': [moment(), moment()],
  'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  'Past Week': [moment().subtract(6, 'days'), moment()],
  'Past 3 Months': [moment().subtract(91, 'days'), moment()],
  'Past 6 Months': [moment().subtract(182, 'days'), moment()],
  'This Month': [moment().startOf('month'), moment().endOf('month')],
  'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
}
invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

isInvalidDate = (m: moment.Moment) =>  {
  return this.invalidDates.some(d => d.isSame(m, 'day') )
}
 //filterdata

 launch_success:any;
 
  filterList = {
    launch_success : ['success','failed', 'upcoming'],
    }; 
  
    //modelbox for row data
  modalRef?: BsModalRef;
// title:any;
//filter
filter:any;
  appliedfilters: any;
  loading:boolean=false;
  spaceData:any;
  constructor(private launcheservice:LaunchesdataService,private modalService: BsModalService,private route:Router) { 
    this.alwaysShowCalendars = true;

  }
    //  pagination//

  public launches:any=[];
  totalLength:any;
  page:number = 1;
   public length:any;

   data:Launches[]=[];
   @Input() list:any;
   @Output() onFilterChange = new EventEmitter();
    
  ngOnInit(): void {
    
    this.getlaunchesData();
  }
  // dateCreated($event){  
    
  //       this.filter = this.launches;  
    
  //       this.filter = this.filter.filter(x => x.CreatedDate == $event.toJSON().split('T')[0]);  
    
  //     } 
      dateRangeCreated(e) {  
        console.log(e);
            this.filter = this.launches;  
        
            let startDate = e[0].splite(',')[0];  
        
            let endDate = e[1].splite(',')[0];  
        
            this.filter = this.filter.filter(  
        
              m => new Date(m.CreatedDate) >= new Date(startDate) && new Date(m.CreatedDate) <= new Date(endDate)  
        
            );  
       
          }
  getlaunchesData(){
    const res = this.launcheservice.getlaunchesData();
    res.subscribe((data:Launches[]) => {
      this.filter =this.launches = data;
      console.log(this.launches)
    });
    this.launcheservice.data.subscribe((item:any) => {
      this.data = item;
     
    });
   }
  openmodalbox(spacetemplate:any,ans:any){
  
    // this.modalRef = this.modalService.show(LaunchesComponent, {initialState:{
    //    title:'Model Title'
    // }});
    this.spaceData = ans;
    this.modalRef = this.modalService.show(spacetemplate, Object.assign({ backdrop: 'static', class: 'modal-md bg-blue' }));
    console.log(" spacedata response")
    // this.modalRef = this.modalService.show(template, Object.assign({ backdrop: 'static', class: 'modal-md bg-blue' }));
    
    // this.launcheservice.getlaunchesData().subscribe((res:any)=>{
    //   console.log(res)
    //   this.launches=res;
  
    // })
    // console.log(this.route)
    
  
  }
  closeModal(){
    this.modalRef?.hide(); 
    this.spaceData =undefined
  }
copydata=this.launches;
filterChange(appliedfilters:any) {
  this.copydata=this.launches
 console.log(appliedfilters);
 
this.launch_success=appliedfilters.appliedFilterValues.launch_success;
if(this.launch_success === 'success')
{
  // this.launches=this.launches.filter((res: { launch_success: boolean; })=> res.launch_success===this.launch_success);
  
  this.filter=this.launches.filter(res =>res.launch_success);
  //  this.launches.push(this.launch_success) 
  console.log();
   console.log(this.launch_success);
  }
  else if(this.launch_success === 'upcoming'){
    this.filter=this.launches.filter(res  =>!res.launch_success && res.upcoming);
   } else if(this.launch_success === 'failed'){
    this.filter=this.launches.filter(res  =>!res.launch_success && !res.upcoming);
   }
}
}
function res(res: any, arg1: any, arg2: boolean): any {
 throw new Error('Function not implemented.');
}



