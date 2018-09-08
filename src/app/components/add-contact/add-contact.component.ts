import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

import { Contact } from "../../models/contact.model";

@Component({
  selector: "add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"]
})
export class AddContactComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstname: ["", ""],
      lastname: ["", ""],
      department: ["", ""],
      phonenumber: ["", ""]
    });
  }

  addContact(): void {
    if (this.contactForm.dirty) {
      const contact = <Contact>this.contactForm.value;
      console.log("contact = ", contact);
      // call service

      // redirect
    }
  }
}
