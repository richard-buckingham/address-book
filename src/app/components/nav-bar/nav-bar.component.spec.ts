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

  it("should have title 'Address Book'", () => {
    let de: DebugElement = fixture.debugElement.query(By.css("nav"));
    let el = de.nativeElement;

    expect(el.textContent).toContain(component.title);
  });

  it("should display a font-awesome icon", () => {
    const de: DebugElement = fixture.debugElement.query(By.css("nav>a>i"));
    const el = de.nativeElement;

    expect(el).toBeTruthy();
    expect(el.className).toContain("fa-address-book-o");
  });

  it("should display updated title", () => {
    const de: DebugElement = fixture.debugElement.query(By.css("nav>a>i>span"));
    const el = de.nativeElement;

    const testTitle = "Some Test Title";
    component.title = testTitle;
    fixture.detectChanges();
    expect(el.textContent).toContain(testTitle);
  });
});
