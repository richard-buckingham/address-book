import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";

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
  @Input()
  index: Number;
  @Input()
  preventContactDeletion: Boolean;

  @Output()
  delete: EventEmitter<Number> = new EventEmitter<Number>();

  deleteContact(): void {
    this.delete.emit(this.index);
  }
}
