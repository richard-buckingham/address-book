import { Component, OnInit } from "@angular/core";

import { Contact } from "../../models/contact.model";
import { StateService } from "../../services/state.service";

@Component({
  selector: "address-book",
  templateUrl: "./address-book.component.html",
  styleUrls: ["./address-book.component.scss"]
})
export class AddressBookComponent implements OnInit {
  contacts: Contact[];

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.contacts = this.stateService.getContacts();
  }

  deleteContact(index: Number): void {
    this.stateService.deleteContact(index);
    this.contacts = this.stateService.getContacts();
  }

  saveContact(contact: Contact): void {
    this.stateService.saveContact(contact);
    this.contacts = this.stateService.getContacts();
  }
}
