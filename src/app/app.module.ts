import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { AddressBookComponent } from "./containers/address-book/address-book.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { ContactDetailComponent } from "./components/contact-detail/contact-detail.component";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { StateService } from "./services/state-service.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddressBookComponent,
    ContactListComponent,
    ContactDetailComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "home", component: AddressBookComponent },
      { path: "contact-add", component: AddContactComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "home", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
