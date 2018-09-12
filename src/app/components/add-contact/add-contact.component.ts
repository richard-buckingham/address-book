import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Contact } from "../../models/contact.model";
import { StateService } from "../../services/state.service";
import { ReferenceDataService } from "../../services/reference-data.service";

@Component({
  selector: "add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"]
})
export class AddContactComponent implements OnInit {
  public contactForm: FormGroup;

  @Output()
  save = new EventEmitter<Contact>();

  departments: string[];

  constructor(
    private formBuilder: FormBuilder,
    private stateService: StateService,
    private referenceDataService: ReferenceDataService
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      department: ["", Validators.required],
      phonenumber: ["", Validators.required]
    });

    this.departments = this.referenceDataService.getDepartments();
  }

  addContact(): void {
    if (this.contactForm.dirty && this.contactForm.valid) {
      const contact = <Contact>this.contactForm.value;
      this.save.emit(contact);
      this.contactForm.reset();
    }
  }

  reset() {
    this.contactForm.reset();
  }
}
