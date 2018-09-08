import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnInit,
  OnChanges
} from "@angular/core";

import { Contact } from "../../models/contact.model";

@Component({
  selector: "contact-list",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
})
export class ContactListComponent implements OnInit, OnChanges {
  @Input()
  contacts: Contact[];

  @Output()
  delete: EventEmitter<Number> = new EventEmitter<Number>();

  filteredContacts: Contact[];
  _nameFilter = "";
  get nameFilter(): string {
    return this._nameFilter;
  }
  set nameFilter(value: string) {
    this._nameFilter = value;
    this.filteredContacts = this.nameFilter
      ? this.performFilter(this.nameFilter)
      : this.contacts;
  }

  performFilter(filterBy: string): Contact[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.contacts.filter(
      (contact: Contact) =>
        contact.firstname.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        contact.lastname.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit(): void {
    this.filteredContacts = [...this.contacts];
  }

  ngOnChanges(): void {
    this.filteredContacts = [...this.contacts];
  }

  deleteContact(index: Number): void {
    this.delete.emit(index);
  }
}
