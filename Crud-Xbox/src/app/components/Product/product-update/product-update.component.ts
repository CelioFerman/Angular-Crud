import { ProductService } from "src/app/Services/product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product-create/product.model";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.scss"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  updateProduct(): void {}

  cancel(): void {
    this.router.navigate(["/products"]);
  }
} 
