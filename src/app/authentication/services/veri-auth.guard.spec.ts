import { TestBed, async, inject } from '@angular/core/testing';

import { VeriAuthGuard } from './veri-auth.guard';

describe('VeriAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeriAuthGuard]
    });
  });

  it('should ...', inject([VeriAuthGuard], (guard: VeriAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
