import { DatatimePipe } from './datatime.pipe';

fdescribe('DatatimePipe', () => {
  it('create an instance', () => {
    const pipe = new DatatimePipe();
    expect(pipe).toBeTruthy();
  });
});
