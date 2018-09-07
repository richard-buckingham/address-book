import { Component, OnInit } from "@angular/core";

import { Contact } from "../../models/contact.model";

@Component({
  selector: "contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit {
  private contacts: Contact[];

  constructor() {}

  ngOnInit() {
    this.contacts = [
      {
        firstname: "Dan",
        lastname: "Ricciardo",
        department: "Marketing",
        phonenumber: "0400111111"
      },
      {
        firstname: "Helmet",
        lastname: "Marko",
        department: "HR",
        phonenumber: "0400333333"
      },
      {
        firstname: "Max",
        lastname: "Verstappen",
        department: "Marketing",
        phonenumber: "0400222222"
      }
    ];
  }
}
