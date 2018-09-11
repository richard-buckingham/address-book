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
  sortDirection: string = "";

  _nameFilter = "";
  get nameFilter(): string {
    return this._nameFilter;
  }
  set nameFilter(value: string) {
    this._nameFilter = value;
    this._departmentFilter = "";
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
    this._nameFilter = "";
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
    //this.filteredContacts = [...this.contacts];
    this.filteredContacts = this.contacts;
    this.departments = this.referenceDataService.getDepartments();
  }

  ngOnChanges(): void {
    this.filteredContacts = this.contacts;
    this._nameFilter = "";
    this._departmentFilter = "";
  }

  deleteContact(index: Number): void {
    this.delete.emit(index);
  }

  disableDeleteButton(): boolean {
    return (
      this._nameFilter.toString().length > 0 ||
      this._departmentFilter.toString().length > 0
    );
  }

  sort(): void {
    switch (this.sortDirection) {
      case "asc": {
        this.filterContactsDesc();
        break;
      }
      case "desc": {
        this.filterContactsAsc();
        break;
      }
      default: {
        this.filterContactsAsc();
        break;
      }
    }
  }

  filterContactsAsc(): void {
    this.filteredContacts.sort((a, b) => a.lastname.localeCompare(b.lastname));
    this.sortDirection = "asc";
  }

  filterContactsDesc(): void {
    this.filteredContacts.sort((a, b) => b.lastname.localeCompare(a.lastname));
    this.sortDirection = "desc";
  }
}
