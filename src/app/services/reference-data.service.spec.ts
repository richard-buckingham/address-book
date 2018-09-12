import { TestBed, inject } from "@angular/core/testing";

import { ReferenceDataService } from "./reference-data.service";

describe("ReferenceDataService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceDataService]
    });
  });

  it("should be created", inject(
    [ReferenceDataService],
    (service: ReferenceDataService) => {
      expect(service).toBeTruthy();
    }
  ));

  it("should return 7 departments", inject(
    [ReferenceDataService],
    (service: ReferenceDataService) => {
      const departments = service.getDepartments();
      expect(departments.length).toBe(7);
    }
  ));
});
