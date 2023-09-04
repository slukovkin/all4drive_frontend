import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  @Output()
  sideMenuControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>();

  @ViewChild("drawer", { static: true })
  sideMenu!: MatDrawer;
  showPage!: string

  constructor() {}

  ngOnInit() {
    this.sideMenuControl.emit(this.sideMenu);
  }

  switchPage(name: string) {
    this.showPage = name
  }
}
