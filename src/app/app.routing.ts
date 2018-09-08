import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AddressBookComponent } from "./containers/address-book/address-book.component";
import { AddContactComponent } from "./components/add-contact/add-contact.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: AddressBookComponent },
  { path: "contact-add", component: AddContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
