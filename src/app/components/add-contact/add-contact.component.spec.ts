import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";

import { AddContactComponent } from "./add-contact.component";
import { StateService } from "../../services/state.service";

describe("AddContactComponent", () => {
  let component: AddContactComponent;
  let fixture: ComponentFixture<AddContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [StateService, FormBuilder]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit a new contact", () => {
    spyOn(component.save, "emit").and.callThrough();

    const contact = {
      firstname: "Dan",
      lastname: "Ricciardo",
      department: "Racing",
      phonenumber: "0400111111"
    };

    component.ngOnInit();

    component.contactForm.patchValue(contact);
    component.addContact();
    expect(component.save.emit).toHaveBeenCalledWith(contact);
  });

  it("form invalid when empty", () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it("firstname field invalid when empty", () => {
    let firstname = component.contactForm.controls["firstname"];
    expect(firstname.valid).toBeFalsy();
  });

  it("lastname field invalid when empty", () => {
    let lastname = component.contactForm.controls["lastname"];
    expect(lastname.valid).toBeFalsy();
  });

  it("department field invalid when empty", () => {
    let department = component.contactForm.controls["department"];
    expect(department.valid).toBeFalsy();
  });

  it("phonenumber field invalid when empty", () => {
    let phonenumber = component.contactForm.controls["phonenumber"];
    expect(phonenumber.valid).toBeFalsy();
  });
});
