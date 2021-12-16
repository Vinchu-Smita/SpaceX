import { Component, OnInit } from '@angular/core';
import { LaunchesdataService } from '../launches/launchesdata.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-launch-model-box',
  templateUrl: './launch-model-box.component.html',
  styleUrls: ['./launch-model-box.component.scss']
})
export class LaunchModelBoxComponent implements OnInit {
  modalRef?: BsModalRef;

  constructor(private launcheservice:LaunchesdataService,private modalService: BsModalService) { }
title:any;
public launches:any=[];
  ngOnInit(): void {
   
  
    }
    openmodal(template:any){
      // console.log(this.launches)
     this.launcheservice.getlaunchesData().subscribe((res:any)=>{
          this.launches=res;
          console.log(res)
     })
      this.modalRef = this.modalService.show(LaunchModelBoxComponent, {initialState:{
      }});
      this.modalRef = this.modalService.show(template, Object.assign({ backdrop: 'static', class: 'modal-md bg-blue' }));
    
     
    }
    closeModal(){
      this.modalRef?.hide(); 
    }
}
