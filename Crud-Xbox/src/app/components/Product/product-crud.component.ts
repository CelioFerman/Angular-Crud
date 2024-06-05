import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "../templates/header/header.service";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.scss"],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
        title: 'Cadastro  de Produtos',
        icon: 'storefront',
        routeURL:'/products'
      }
    }
  

  ngOnInit(): void {}

  navProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}