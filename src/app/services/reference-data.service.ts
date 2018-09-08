import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ReferenceDataService {
  public getDepartments(): string[] {
    return ["Marketing", "HR", "Engine", "Aero", "Sales", "Management"];
  }
}
