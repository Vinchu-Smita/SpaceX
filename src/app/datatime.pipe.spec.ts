import { DatatimePipe } from './datatime.pipe';
import {DatePipe} from "@angular/common";
import { TestBed } from '@angular/core/testing';
beforeEach(async () => {
  
  await TestBed.configureTestingModule({
  providers: [DatePipe]
  })
  
});
  

describe('DatatimePipe', () => {
  it('create an instance', () => {
    const pipe = new DatatimePipe();
    expect(pipe).toBeDefined()
  });

  it('create an transform', () => {
 
    const pipe = new DatatimePipe();
    // expect(pipe).toHaveBeenCalled();
    
      expect(pipe.transform(new Date)).not.toEqual('null(new date)');
      expect(pipe.transform(null)).toBeDefined();

  });
  // it('create an transform', () => {
 
  //   const pipe = new DatatimePipe();
  //   // expect(pipe).toHaveBeenCalled();
  //     expect(pipe.transform).toBe(null)

  // });
  
   // spyOn(DatatimePipe, 'transform');
   // expect(DatatimePipe.transform);
     //  component.datesUpdated();
    // fixture.detectChanges();
    // expect(component.details.get('toLocaleDateString').value.toString()).toBe(date);
    // expect(component.datesUpdated(date)).toBe();
});
