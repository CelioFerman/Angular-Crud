import { Component, OnInit } from "@angular/core";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService:HeaderService ) {}

  ngOnInit(): void {
    
    }
    get title(): String {
      return  this.headerService.headerData.title
  }
    get icon(): String {
      return  this.headerService.headerData.icon
  }
    get routeURL(): String {
     return this.headerService.headerData.routeURL
  }
}
