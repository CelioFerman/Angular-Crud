import { ActivatedRoute, Route, Router } from "@angular/router";
import { ProductService } from "src/app/Services/product.service";
import { Product } from "./../product-create/product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delet",
  templateUrl: "product-delete.component.html",
  styleUrls: ["./product-delete.component.scss"],
})
export class ProductDeleteComponent implements OnInit {
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

  deleteProduct(): void {
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}

function deleteProduct() {
  throw new Error("Function not implemented.");
}
