import { ComponentFixture, TestBed ,fakeAsync, tick, async} from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, RouterOutlet ,Router, ActivatedRoute,convertToParamMap,RouterLinkWithHref} from '@angular/router';
import { GenericListFilterComponent, GenericListFilterModule } from 'generic-list-filter';
import { DaterangepickerDirective, NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import {NgxPaginationModule, PaginationControlsComponent, PaginationControlsDirective} from 'ngx-pagination';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Location } from "@angular/common";
import { LaunchesComponent } from './launches.component';
import { LaunchesdataService } from './launchesdata.service';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
// import 'rxjs/add/observable/of';
import {BrowserDynamicTestingModule,platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import { FormsModule } from '@angular/forms';
import { launchesmockservice } from '../mocks service/launchesmockservice';
import {  observable, Observable ,of, throwError} from 'rxjs';
import { Launches } from './launches.model';
import { routes } from '../app-routing.module';
import {ContentContainerComponentHarness} from '@angular/cdk/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;
  // let router = {
  //   navigate: jasmine.createSpy('navigate')
  // };
  // const modalService: BsModalService = TestBed.get(BsModalService);
  // modalService.hide();
 
  let modalRef=BsModalService;
  // let modalService: BsModalService;
  let bsModalRef: BsModalRef = new BsModalRef();
  let location: Location;
  // let router:Router;
  // let debugElement:DebugElement;
  let getData:LaunchesComponent;
  let service:LaunchesdataService;
  let spacetemplate:any;
  let ans:any;
  // let launch_success:any;
  let appliedFilterValues:any;
  let dateRangeCreated:any;
  let inputElement: HTMLInputElement;
  let  submitEl: DebugElement;
 
  let loader: HarnessLoader;
  let rootLoader: HarnessLoader;
  let mockRouter;

  let filterList = {
    launch_success : ['success','failed', 'upcoming','all'],
    };
  // let activatedRoute: ActivatedRoute;
 
  beforeAll(() => {
    
    // loader = TestbedHarnessEnvironment.loader(fixture);
  // rootLoader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
        platformBrowserDynamicTesting());
});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      declarations: [ LaunchesComponent,RouterOutlet, PaginationControlsComponent,GenericListFilterComponent,PaginationControlsDirective ],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[
        RouterTestingModule.withRoutes([  {path:"launches/:launchType",component:LaunchesComponent}]),
        HttpClientModule ,
        ModalModule.forRoot(),
        RouterModule ,
        GenericListFilterModule,
        NgxPaginationModule,
        NgxDaterangepickerMd.forRoot(),
        HttpClientTestingModule,
        FormsModule,
        // CommonModule

      ],

      providers:[
       { provide: LaunchesdataService, useValue: {}},
       {provide:LaunchesdataService,useClass:launchesmockservice},
       { provide: ComponentFixtureAutoDetect, useValue: true },
       {provode:  BsModalService, useValue:{}},
      //  { provide: Router, useValue: mockRouter},
      //  { provide: ActivatedRoute, useValue: {params: Observable.from([{id: 1}]),},}
      //  {provide: ActivatedRoute,useValue: { snapshot: {params: {property: 'get',someId: 1}}}}
     
      ]
    })
    .compileComponents();
    
//     fixture = TestBed.createComponent(LaunchesComponent);
//     // router.initialNavigation();
//  router = TestBed.get(Router);
//     location = TestBed.get(Location);
  });

  beforeEach(() => {
   
    fixture = TestBed.createComponent(LaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.get(LaunchesdataService);
    // activatedRoute = TestBed.get(ActivatedRoute);
    inputElement = <HTMLInputElement> fixture.debugElement.nativeElement.querySelector('INPUT');
    fixture.detectChanges();
     submitEl = fixture.debugElement.nativeElement.querySelector('button');
   
  });
  // it('should navigate away when authenticated', () => {
  //   mockService.isAuthenticated.and.returnValue(true);
  //   // mockService.queryParams.and.callFake((data, params) => new Observable(o => o.next({ params: {} })));
  //   component.ngOnInit();
  //   expect(mockService.navigate).toHaveBeenCalledWith(['/launches']);
  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should not show laoding on component init', () => {
    expect(component.loading).toBe(false);
  });
  it('should  show alwaysShowCalendars on component init', () => {
    expect(component.alwaysShowCalendars).toBe(true);
  });
  it('should    show ranges on component init', () => {
    expect(component.ranges).toBeDefined();
  });
 
  // it('should return the next day in a specific format isInvalidDate', () => {
  //   // const date = new Date().format('YYYY-MM-DD');
  //   expect(component.invalidDates).toBeDefined()
  // });

  //ngonit method
  it('should run #ngOnInit() method', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled(); 
 });

//sucessful closeModal
it('shold open model box',()=>{
  expect(component.openmodalbox()).toBeUndefined();
});

it('should run close model method', () => {
  spyOn(component,'closeModal')
   component.closeModal();
  expect(component.modalRef?.hide);
 
  // spyOn(component,modalRef).and.callThrough();
  // component.detectChanges();
  expect(component.closeModal).toBeTruthy();
  expect(component.spaceData).toBeUndefined;

});
it('call cancel user and set "selectedUser" as null', () =>{
  // spyOn(component,modalRef).and.callThrough();
  spyOn(component,'closeModal').and.callThrough();
  // const openBtn = fixture.nativeElement.querySelector('#open-btn');
  // openBtn.click();
  // fixture.detectChanges();
  // const cancelBtn = fixture.nativeElement.querySelector('#cancel-btn');
  // cancelBtn.click();
  expect(component.modalRef?.hide).toHaveBeenCalled();
  // expect(component.closeModal).toHaveBeenCalled();
  // expect(component.spaceData).toBeNull();
});

it('should run close model method', () => {
  spyOn(component,'closeModal').and.callThrough();
  component.closeModal();
  expect(component.modalRef?.hide);
  expect(component.modalRef?.hide).toBeDefined();
    // expect(component.closeModal).toBeDefined();
    expect(component.spaceData).toBeUndefined();

});

//sucess getlaunches method
  it(" should run getlaunchesData method", () => {
     spyOn(component.launcheservice,'getlaunchesData')
    
     component.getlaunchesData1();
    expect(component.launcheservice.getlaunchesData).toBeTruthy();
});
it(" should run getlaunchesData method", () => {
  spyOn(component.launcheservice,'getlaunchesData')
 
  component.getlaunchesData1();
 expect(component.getlaunchesData1).not.toBe(false);
});
//sucess routerfilter\

// it('should run routebyfilter method', () => {
//   spyOn(component,'routebyfilter')
//   component.routebyfilter();
//   expect(component.routebyfilter('launche_suceess')).toBeUndefined()
//       expect(component.routebyfilter).toHaveBeenCalled();
// });


it('should call method2 if factor not exist', () =>{
  // let launch_success=null;
  const spy =  spyOn(component, 'routebyfilter').and.returnValue()
  
  component.routebyfilter();     // should execute else part
  expect(spy).not.toBeNull();
  expect(spy).not.toBeUndefined()
})

// 
//  it('navigate to "" redirects you to /home',() => {
//     spyOn(component,'routebyfilter')

//     router.navigate([""]).then(() => {
//       expect(component.routebyfilter).toBe('/launches');
//     });
//   });
  
// error= Cannot match any routes. URL Segment: 'launches/all'',
  it(' testing filter Function', () => {
    // launch_success=appliedfilters
    spyOn(component,'onFilterChange');
    // component.filterChange();
    fixture.detectChanges();
    const event = new Event ('onFilterChange')
    // expect(component.launch_success).not.toEqual('all');
    expect(component.filterChange(event)).toBeDefined();
    // expect(component.filterChange).toBeTruthy()
  });
  // it('apply filter', () => {
  //   spyOn(component, 'filterChange');
  //   component.filterChange('appliedfilters');
  //   // component.filterChange('filterValue');
  //  fixture.detectChanges();
  //   expect(component.launch_success).toEqual('all');
  //   expect(component.filterChange);
  // })
  //error _d  datesUpdated
  it('should check datesUpdated',()=>{
     expect(component.datesUpdated('startDate')).toBeDefined();
  })
//  
  it('should check datesUpdated ondate selected event', () => {
    spyOn(component, 'datesUpdated');
   
    expect(component.datesUpdated);
    const date = new Date(10 / 3 / 2019);
    component.datesUpdated(date);
  //  component.datesUpdated();
    fixture.detectChanges();
    // expect(component.details.get('toLocaleDateString').value.toString()).toBe(date);
    expect(component.datesUpdated(date)).toBe();
  });
 
//   it('should check datesUpdated ondate selected event', () => {
//     spyOn(component, 'datesUpdated');
//   component.datesUpdated('e');
//   expect(component.datesUpdated).toHaveBeenCalled();
// });

});
function appliedfilters(appliedfilters: any): void {
  throw new Error('Function not implemented.');
}
function then(arg0: () => void) {
  throw new Error('Function not implemented.');
}


function params(params: any): Function {
  throw new Error('Function not implemented.');
}
  //sucess dateRangeCreated method
//  it('should check dateRangeCreated',()=>{

//       expect(component.dateRangeCreated('startDate')).toBeDefined();
//    });
//  it(' testing dateRangeCreated Function', () => {
//   spyOn(component,'dateRangeCreated');
//   component.dateRangeCreated();
//   expect(component.dateRangeCreated()).not.toBeTruthy();
// });
//sucess datepicker method
// it('testing datepicker function', fakeAsync(() => {
//   spyOn(component, 'openDatepicker');

//   let button = fixture.debugElement.nativeElement.querySelector('i');
//   button.click();
// component.openDatepicker
//   fixture.whenStable().then(() => {
//     expect(component.openDatepicker).toHaveBeenCalled();
//   });
// }));

//suceessful dateupdated method
// it(' testing dateupdated Function', () => {
//   // const date = '04/02/2018';
//   spyOn(component,'datesUpdated');
//   component.datesUpdated();
//   expect(component.datesUpdated()).toBe();
// });
