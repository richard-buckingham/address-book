import { TestBed, inject } from "@angular/core/testing";

import { StateService } from "./state.service";
import { Contact } from "../models/contact.model";

describe("StateService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateService]
    });
  });

  it("should be created", inject([StateService], (service: StateService) => {
    expect(service).toBeTruthy();
  }));

  it("should return 5 sample contacts", inject(
    [StateService],
    (service: StateService) => {
      const contacts = service.getContacts();
      expect(contacts.length).toBe(5);
    }
  ));

  it("should add a contact to the contact array", inject(
    [StateService],
    (service: StateService) => {
      const contact: Contact = {
        firstname: "Kimi",
        lastname: "Rikannen",
        department: "Racing",
        phonenumber: "0400123456"
      };

      service.saveContact(contact);
      const contacts = service.getContacts();
      expect(contacts.length).toBe(6);
    }
  ));

  it("should delete from a specified index of the contact array", inject(
    [StateService],
    (service: StateService) => {
      service.deleteContact(0);
      const contacts = service.getContacts();
      const contact = contacts.find(
        c => c.firstname.toLocaleLowerCase() === "dan"
      );

      expect(contacts.length).toBe(4);
      expect(contact).toBeFalsy();
    }
  ));
});
