import { Component, OnInit } from "@angular/core";

import { Contact } from "../../models/contact.model";

@Component({
  selector: "address-book",
  templateUrl: "./address-book.component.html",
  styleUrls: ["./address-book.component.scss"]
})
export class AddressBookComponent implements OnInit {
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
