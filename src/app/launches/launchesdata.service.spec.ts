import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { LaunchesdataService } from './launchesdata.service';

fdescribe('LaunchesdataService', () => {
  let service: LaunchesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule], providers: [LaunchesdataService] 
    });
    service = TestBed.inject(LaunchesdataService);
    
  });

  it('should be created', () => {
    const service: LaunchesdataService = TestBed.get(LaunchesdataService);
    expect(service).toBeTruthy();
  });
});
// it('should be created', () => {
//   const service: myService = TestBed.get(myService);
//   expect(service).toBeTruthy();
//  });

//  it('should have getData function', () => {
//   const service: myService = TestBed.get(myService);
//   expect(service.getData).toBeTruthy();