import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { Contact } from "../../models/contact.model";

@Component({
  selector: "contact-detail",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./contact-detail.component.html",
  styleUrls: ["./contact-detail.component.scss"]
})
export class ContactDetailComponent {
  @Input()
  contact: Contact;
}
