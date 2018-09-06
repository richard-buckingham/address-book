import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { NavBarComponent } from "./nav-bar.component";

describe("NavBarComponent", () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have text 'Address Book'", () => {
    let de: DebugElement = fixture.debugElement.query(By.css("nav"));
    let el = de.nativeElement;

    expect(el.textContent).toContain("Address Book");
  });
});
