import { Injectable } from "@angular/core";

import { Contact } from "../models/contact.model";

@Injectable()
export class StateService {
  private contacts: Contact[];

  constructor() {
    // sample data
    this.contacts = [
      {
        firstname: "Dan",
        lastname: "Ricciardo",
        department: "Racing",
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
        department: "Racing",
        phonenumber: "0400222222"
      },
      {
        firstname: "Christian",
        lastname: "Horner",
        department: "Management",
        phonenumber: "0400444444"
      },
      {
        firstname: "Adrian",
        lastname: "Newey",
        department: "Aero",
        phonenumber: "0400555555"
      }
    ];
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  saveContact(contact: Contact): void {
    this.contacts = [...this.contacts, contact];
  }

  deleteContact(index: Number): void {
    console.log("in deleteContact. index = ", index);
    this.contacts = this.contacts.filter((contact, i) => {
      return i !== index;
    });
  }
}
