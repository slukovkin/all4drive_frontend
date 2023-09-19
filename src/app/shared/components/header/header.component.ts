import { Component, Input } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  title = "All4Drive";
  isActiveDirectories = false;

  @Input()
  drawer!: MatDrawer;

  setSideNav(drawer: MatDrawer) {
    this.drawer = drawer;
  }
}
