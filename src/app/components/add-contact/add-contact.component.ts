import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

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
  departments: string[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private stateService: StateService,
    private referenceDataService: ReferenceDataService
  ) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstname: ["", ""],
      lastname: ["", ""],
      department: ["", ""],
      phonenumber: ["", ""]
    });

    this.departments = this.referenceDataService.getDepartments();
  }

  addContact(): void {
    if (this.contactForm.dirty) {
      const contact = <Contact>this.contactForm.value;
      this.stateService.saveContact(contact);
      this.router.navigateByUrl("/home");
    }
  }

  cancel() {
    this.router.navigateByUrl("/home");
  }
}
