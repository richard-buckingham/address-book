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
      const contactKimi = contacts.find(
        c => c.firstname.toLocaleLowerCase() === "kimi"
      );

      expect(contacts.length).toBe(6);
      expect(contactKimi).toBeTruthy();
    }
  ));

  it("should delete from a specified index of the contact array", inject(
    [StateService],
    (service: StateService) => {
      const index: number = 0;
      service.deleteContact(index);

      const contacts = service.getContacts();
      const contactDan = contacts.find(
        c => c.firstname.toLocaleLowerCase() === "dan"
      );
      const contactHelmet = contacts.find(
        c => c.firstname.toLocaleLowerCase() === "helmet"
      );
      const contactMax = contacts.find(
        c => c.firstname.toLocaleLowerCase() === "max"
      );
      const contactChristian = contacts.find(
        c => c.firstname.toLocaleLowerCase() === "christian"
      );
      const contactAdrian = contacts.find(
        c => c.firstname.toLocaleLowerCase() === "adrian"
      );

      expect(contacts.length).toBe(4);
      expect(contactDan).toBeFalsy();
      expect(contactHelmet).toBeTruthy();
      expect(contactMax).toBeTruthy();
      expect(contactChristian).toBeTruthy();
      expect(contactAdrian).toBeTruthy();
    }
  ));
});
