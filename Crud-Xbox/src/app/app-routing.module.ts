import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./components/Product/product-crud.component";
import { ProductCreateComponent } from "./components/Product/product-create/product-create.component";
import { ProductUpdateComponent } from "./components/Product/product-update/product-update.component";
import { ProductDeletComponent } from "./components/Product/product-delet/product-delet.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductCrudComponent,
  },
  {path: "products/create",
    component: ProductCreateComponent
  },
  {path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {path: "products/delete/:id",
    component: ProductDeletComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
