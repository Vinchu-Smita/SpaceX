import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, RouterOutlet } from '@angular/router';
import { GenericListFilterComponent, GenericListFilterModule } from 'generic-list-filter';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import {NgxPaginationModule, PaginationControlsComponent, PaginationControlsDirective} from 'ngx-pagination';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LaunchesComponent } from './launches.component';
import { LaunchesdataService } from './launchesdata.service';
// import { DatePipe } from '@angular/common';
// import { DynamicTestModule } from '@angular/common';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
fdescribe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesComponent,RouterOutlet, PaginationControlsComponent,GenericListFilterComponent,PaginationControlsDirective ],
      imports:[
        RouterTestingModule,
        HttpClientModule ,
        ModalModule.forRoot(),
        RouterModule ,
        GenericListFilterModule,
        NgxPaginationModule,
        NgxDaterangepickerMd.forRoot(),
        HttpClientTestingModule,
        // DatePipe,
        
        // DynamicTestModule
        
      ],
      providers:[
       { provide: LaunchesdataService, useValue: {}},
       { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
