import { Component, Input } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  @Input()
  drawer!: MatDrawer;
}
