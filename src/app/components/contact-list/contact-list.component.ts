import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";

import { Contact } from "../../models/contact.model";

@Component({
  selector: "contact-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent {
  @Input()
  contacts: Contact[];

  @Output()
  delete: EventEmitter<Number> = new EventEmitter<Number>();

  deleteContact(index: Number): void {
    this.delete.emit(index);
  }
}
