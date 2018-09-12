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

    component.contactForm.patchValue(contact);
    component.addContact();
    expect(component.save.emit).toHaveBeenCalledWith(contact);
  });
});
