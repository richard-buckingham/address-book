import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AddressBookComponent } from "./address-book.component";
import { ContactListComponent } from "../../components/contact-list/contact-list.component";
import { AddContactComponent } from "../../components/add-contact/add-contact.component";
import { ContactDetailComponent } from "../../components/contact-detail/contact-detail.component";
import { StateService } from "../../services/state.service";

describe("AddressBookComponent", () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddressBookComponent,
        ContactListComponent,
        AddContactComponent,
        ContactDetailComponent
      ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [StateService]
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
