import { ProductService } from "src/app/Services/product.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.productService.readById(id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto Atualizado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
