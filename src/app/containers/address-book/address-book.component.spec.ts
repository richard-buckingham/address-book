import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddressBookComponent } from "./address-book.component";
import { EmployeeListComponent } from "../../components/employee-list/employee-list.component";

describe("AddressBookComponent", () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressBookComponent, EmployeeListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
