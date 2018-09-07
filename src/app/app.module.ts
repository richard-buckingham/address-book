import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AddressBookComponent } from "./containers/address-book/address-book.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddressBookComponent,
    ContactListComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
