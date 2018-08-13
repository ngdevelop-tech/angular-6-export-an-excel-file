import { TestBed, inject } from '@angular/core/testing';

import { ExcelService } from './excel.service';

describe('ExcelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcelService]
    });
  });

  it('should be created', inject([ExcelService], (service: ExcelService) => {
    expect(service).toBeTruthy();
  }));
});
