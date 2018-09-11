import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ReferenceDataService {
  public getDepartments(): string[] {
    return [
      "Racing",
      "Marketing",
      "HR",
      "Engine",
      "Aero",
      "Sales",
      "Management"
    ];
  }
}
