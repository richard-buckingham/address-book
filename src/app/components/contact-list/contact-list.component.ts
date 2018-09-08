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
import { ReferenceDataService } from "../../services/reference-data.service";

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

  constructor(private referenceDataService: ReferenceDataService) {}

  filteredContacts: Contact[];
  departments: string[];

  _nameFilter = "";
  get nameFilter(): string {
    return this._nameFilter;
  }
  set nameFilter(value: string) {
    this._nameFilter = value;
    this.filteredContacts = this.nameFilter
      ? this.performNameFilter(this.nameFilter)
      : this.contacts;
  }

  performNameFilter(filterBy: string): Contact[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.contacts.filter(
      (contact: Contact) =>
        contact.firstname.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        contact.lastname.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  _departmentFilter = "";
  get departmentFilter(): string {
    return this._departmentFilter;
  }
  set departmentFilter(value: string) {
    this._departmentFilter = value;
    this.filteredContacts = this.departmentFilter
      ? this.performDepartmentFilter(this.departmentFilter)
      : this.contacts;
  }

  performDepartmentFilter(filterBy: string): Contact[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.contacts.filter(
      (contact: Contact) =>
        contact.department.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit(): void {
    this.filteredContacts = [...this.contacts];
    this.departments = this.referenceDataService.getDepartments();
  }

  ngOnChanges(): void {
    this.filteredContacts = [...this.contacts];
  }

  deleteContact(index: Number): void {
    this.delete.emit(index);
  }
}
