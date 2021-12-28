import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Launches } from './launches.model';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { LaunchesdataService } from './launchesdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import{ MatTableDataSource} from '@angular/material/table';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
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
// ranges: any = {
//   'Today': [moment(), moment()],
//   // 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//   'Past 7 days': [moment().subtract(6, 'days'), moment()],
//   'Past 30 days': [moment().subtract(29, 'days'), moment()],
//   'Past 6 Months': [moment().subtract(182, 'days'), moment()],
//   'This Month': [moment().startOf('month'), moment().endOf('month')],
//   'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
// }
ranges: any = {
  'Past week': [
    moment().subtract(1, 'week').startOf('week'),
    moment().subtract(1, 'week').endOf('week'),
  ],
  'Past month': [
    moment().subtract(1, 'month').startOf('month'),
    moment().subtract(1, 'month').endOf('month'),
  ],
  'Past 3 months': [
    moment().subtract(3, 'months').startOf('month'),
    moment().subtract(1, 'month').endOf('month'),
  ],
  'Past 6 months': [
    moment().subtract(6, 'month').startOf('month'),
    moment().subtract(1, 'month').endOf('month'),
  ],
  'Past year': [
    moment().subtract(1, 'year').startOf('year'),
    moment().subtract(1, 'month').endOf('month'),
  ],
  'Past 2 years': [
    moment().subtract(2, 'year').startOf('year'),
    moment().subtract(1, 'month').endOf('month'),
  ],
};
invalidDates: moment.Moment[] = [moment().add(2, 'days'), moment().add(3, 'days'), moment().add(5, 'days')];

isInvalidDate = (m: moment.Moment) =>  {
  return this.invalidDates.some(d => d.isSame(m, 'day') )
}
 //filterdata

 launch_success='all';
// public launch_success :any;
 
  filterList = {
    launch_success : ['success','failed', 'upcoming','all'],
    }; 
  
    //modelbox for row data
  modalRef?: BsModalRef;
// title:any;
//filter
filter:any;
  appliedfilters: any;
  loading:boolean=false;
  spaceData:any;
  constructor(private route:ActivatedRoute,private launcheservice:LaunchesdataService,private modalService: BsModalService,private router:Router 
   ) { 
    this.alwaysShowCalendars = true;

  }
    //  pagination//

  public launches:any=[];
  totalLength:any;
  page:number = 1;
   public length:any;

   data:Launches[]=[];
   filtertarget:any; 
   inputSizes: {};
   @Input() list:any;
   @Output() onFilterChange = new EventEmitter();
   @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;
  ngOnInit(): void {
    // console.log(this.route)
    // console.log('la unches',this.launch_success)
this.route.params.subscribe(x=> console.log(x))
    
  
    // let id = this.route.snapshot.paramMap.get('id');
    // this.launches = this.launcheservice.getlaunchesData1(id);

    this.getlaunchesData();
   }
  // dateCreated($event){  
    
  //       this.filter = this.launches;  
    
  //       this.filter = this.filter.filter(x => x.CreatedDate == $event.toJSON().split('T')[0]);  
    
  //     }
  datesUpdated(e:any){
    this.routebyfilter(e.startDate._d.toLocaleDateString(),e.endDate._d.toLocaleDateString());

  }
  openDatepicker(){
    this.pickerDirective.open();

  }
  // getInputSize(datepicker: HTMLInputElement) {
  //   switch (datepicker.value) {
  //     case 'Past week':
  //       return 140;
  //     case 'Past month':
  //       return 140;
  //     case 'Past 3 months':
  //       return 150;
  //     case 'Past 6 months':
  //       return 150;
  //     case 'Past year':
  //       return 140;
  //     case 'Past 2 years':
  //       return 150;
  //   }
  // }
  startDate:any;
  endDate:any;

      dateRangeCreated(event:any) { 
        // this.startDate;
        // this.endDate; 
               // this.pickerDirective.open();
        console.log(event)
        // console.log(this.selected.startDate._d.toLocaleDateString(),this.selected.endDate._d.toLocaleDateString())
        // start:this.selected.startDate._d.toLocaleDateString(),
      
        // this.launcheservice.getlaunchesData(this.selected)
        this.routebyfilter(event.startDate._d.toLocaleDateString(),event.endDate._d.toLocaleDateString());
        // console.log(e);
            // this.filter = this.filter;  
            // new Date(this.startDate) && new Date(this.endDate)
       
        // console.log(e[0]);
        // this.filter = this.launches.filter(m => {
          
        //   console.log(m);
        // }  )  
       
          }
          routebyfilter(start?:any, end?:any){
            if(start !== undefined){
              console.log(start,end,this.launch_success)
              this.router.navigate(['/launches',start,end,this.launch_success])
            } else { this.route.params.subscribe(x=> {console.log(x);
              if(x['start'] !== undefined){
              this.router.navigate(['/launches',x['start'],x['end'],this.launch_success])}
           else{
            this.router.navigate(['/launches',this.launch_success])
          }
          
             }
            )
            // this.router.navigate([])
            // path start, end, filter type
              }
            }
  getlaunchesData(){
    // const res = this.launcheservice.getlaunchesData();
    // res.subscribe((data:Launches[]) => {
    //   this.filter =this.launches = data;
    //   console.log(this.launches)
    // });
    // this.launcheservice.data.subscribe((item:any) => {
    //   this.data = item;
     
    // });
    this.route.params.subscribe(c => {console.log(c);
      if(c['launchType'] !== undefined){
           this.launch_success= c['launchType'];
           console.log(c['launchType']);
  
      }
     if(c['start'] !== undefined){
      if(c['launchType'] !== undefined && c['launchType'] !== 'all'){
        this.launcheservice[c['launchType']](c['start'],c['end']).subscribe(x=>
          this.filter = this.launches = x );
      }
      else{
      const res = this.launcheservice.getlaunchesData(c['start'],c['end']);
      res.subscribe((res:Launches[]) => {
        this.filter =this.launches = res;
        console.log(this.launches)
      });
    }
     } else  {
      if(c['launchType'] !== undefined && c['launcheType'] !== 'all'){
        this.launcheservice[c['launchType']](c['start'],c['end']).subscribe(x=>
          this.filter = this.launches = x);
      }else{
      const res = this.launcheservice.getlaunchesData(c['start'],c['end']);
      res.subscribe((res:Launches[]) => {
        this.filter =this.launches = res;
        console.log(this.launches)
      });}
     }
  
    })
  
    // this.launcheservice.data.subscribe((item:any) => {
    //   this.data = item;
     
    // });
  
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
 this.routebyfilter();

this.launch_success=appliedfilters.appliedFilterValues.launch_success;
// if(this.launch_success === 'success')
//  {
//    console.log(this.launch_success);  
//    this.filter=this.launches.filter(nik =>rea.launch_success);
//    this.launches.push(this.launch_success) 
//    console.log();
//    console.log(this.launch_success);
//   //  this.launches=this.launches.filter((res: { launch_success: any; })=>res.launch_success===this.launch_success)
//  } 
//  else if(this.launch_success === 'upcoming'){
//   this.filter=this.launches.filter(res  =>!res.launch_success && res.upcoming);
//  } else if(this.launch_success === 'failed'){
//   this.filter=this.launches.filter(res  =>!res.launch_success && !res.upcoming);
//  }
}

}
// function res(res: any, arg1: any, arg2: boolean): any {
//   throw new Error('Function not implemented.');
// }