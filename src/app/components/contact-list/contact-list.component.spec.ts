import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ContactListComponent } from "./contact-list.component";
import { ContactDetailComponent } from "../contact-detail/contact-detail.component";

describe("ContactListComponent", () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent, ContactDetailComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit a index to delete", () => {
    spyOn(component.delete, "emit").and.callThrough();

    component.ngOnInit();
    component.deleteContact(123);

    expect(component.delete.emit).toHaveBeenCalledWith(123);
  });
});
