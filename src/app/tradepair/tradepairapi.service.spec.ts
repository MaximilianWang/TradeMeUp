import { TestBed, inject } from '@angular/core/testing';

import { TradePairAPIService } from './tradepairapi.service';

describe('BinanceapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradePairAPIService]
    });
  });

  it('should be created', inject([TradePairAPIService], (service: TradePairAPIService) => {
    expect(service).toBeTruthy();
  }));
});
