import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { AddressBookComponent } from "./containers/address-book/address-book.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: AddressBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
