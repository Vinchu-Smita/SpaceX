// import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { LaunchesdataService } from './launchesdata.service';
import {  Observable, observable } from 'rxjs';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Launches } from './launches.model';
// https://space-dashboard1.herokuapp.com/
describe('LaunchesdataService', () => {
  let service: LaunchesdataService;
  let mockhttpclient;
  let httpTestingController:HttpTestingController;
   let url:string="https://api.spacexdata.com/v3/launches";
   let httpClientSpy: { get: jasmine.Spy };
  //  let expectedTarifs;
   let baseUrl = "api/spacedata";
  let traveller: Launches;
  let Response;
  beforeEach(() => {
    service = new LaunchesdataService(mockhttpclient);
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule], providers: [LaunchesdataService,HttpClient] ,
        });
    service = TestBed.inject(LaunchesdataService);
  // LaunchesdataService.getlaunchesData = true;
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  service = new LaunchesdataService(<any><any> httpClientSpy);
  traveller = {
    id: 1,
    launch_name:'falcon',
    launch_year: 2020 ,
    launch_date_utc:20/10/2020,
    orbit:'leo',
    launch_success:true,
    thumbnailUrl:'image'
  };

    
  });

  it('should be created', inject([LaunchesdataService], (service: LaunchesdataService) => {
    expect(service).toBeTruthy();
  }));
  it('should return undefined getlaunchesData when server returns 404', () => {
    let succeeded = false;
    let body= undefined;

    service.getlaunchesData('42').subscribe((response) => {
      succeeded = true;
      // body = response;
    });

    const testRequest = httpTestingController.expectOne('https://api.spacexdata.com/v3/launches');
    testRequest.flush('', { status: 404, statusText: 'Not Found' });

    expect(succeeded).toBeTrue();
    expect(body).toBeUndefined();
  });
 
  it('should return undefined failed when server returns 404', () => {
    let succeeded = false;
    let body= undefined;

    service.failed('42').subscribe((response) => {
      succeeded = true;
      // body = response;
    });

    const testRequest = httpTestingController.expectOne('https://api.spacexdata.com/v3/launches');
    testRequest.flush('', { status: 404, statusText: 'Not Found' });

    expect(succeeded).toBeTrue();
    expect(body).toBeUndefined();
  });
  it('should return undefined success when server returns 404', () => {
    let succeeded = false;
    let body= undefined;

    service.success('42').subscribe((response) => {
      succeeded = true;
      // body = response;
    });

    const testRequest = httpTestingController.expectOne('https://api.spacexdata.com/v3/launches');
    testRequest.flush('', { status: 404, statusText: 'Not Found' });

    expect(succeeded).toBeTrue();
    expect(body).toBeUndefined();
  });
 
  it('should return undefined upcoming when server returns 404', () => {
    let succeeded = false;
    let body= undefined;

    service.upcoming('42').subscribe((response) => {
      succeeded = true;
      // body = response;
    });

    const testRequest = httpTestingController.expectOne('https://api.spacexdata.com/v3/launches');
    testRequest.flush('', { status: 404, statusText: 'Not Found' });

    expect(succeeded).toBeTrue();
    expect(body).toBeUndefined();
  });
 
  it('should return undefined all when server returns 404', () => {
    let succeeded = false;
    let body= undefined;

    service.all('42').subscribe((response) => {
      succeeded = true;
      // body = response;
    });

    const testRequest = httpTestingController.expectOne('https://api.spacexdata.com/v3/launches');
    testRequest.flush('', { status: 404, statusText: 'Not Found' });

    expect(succeeded).toBeTrue();
    expect(body).toBeUndefined();
  });
 


  it('should use getlaunchesData Function', (done: DoneFn) => {
    service = TestBed.inject(LaunchesdataService);
  //  service.getlaunchesData().subscribe(res=>{
  //    expect(res).toBeDefined()
    expect(service.getlaunchesData()).toBeDefined();
    spyOn(service,'getlaunchesData');
    service.getlaunchesData();
    expect(service.getlaunchesData).toHaveBeenCalled();
 
done();
   })
  // });


  // it('should use getData Function', () => {
  //   service = TestBed.inject(LaunchesdataService);
  // const  fialedlaunch=service.failed().subscribe((res)=>{
  //   Response=res
  // })
  //     expect(service.failed(Response)).toBeTruthy();
  //     // service.failed().subscribe(res=>{
  //   //   expect(res).toHaveBeenCalled();
  // });
  it('should use getData Function', () => {
    spyOn(service,'failed');

    service = TestBed.inject(LaunchesdataService);
    expect(service.failed(undefined)).toBeDefined();
  });
  // it('should use getData Function', () => {
  //   service = TestBed.inject(LaunchesdataService);
  //   service.start=undefined;
  //   var result= service.getlaunchesData;
  //   expect(result).toBeTruthy();
  // });
  it('should use getData Function', () => {
    service = TestBed.inject(LaunchesdataService);
    expect(service.success(undefined)).toBeDefined();
  });

  it('should use getData Function', () => {
    service = TestBed.inject(LaunchesdataService);
    expect(service.upcoming(undefined)).toBeDefined();
  });
  it('should use getData Function', () => {
    service = TestBed.inject(LaunchesdataService);
    expect(service.all(undefined)).toBeDefined();
  });
});


