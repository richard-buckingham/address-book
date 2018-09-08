import { Component, OnInit } from "@angular/core";

import { Contact } from "../../models/contact.model";
import { StateService } from "../../services/state.service";

@Component({
  selector: "address-book",
  templateUrl: "./address-book.component.html",
  styleUrls: ["./address-book.component.scss"]
})
export class AddressBookComponent implements OnInit {
  private contacts: Contact[];

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.contacts = this.stateService.getContacts();
  }
}
