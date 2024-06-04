import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FooterComponent } from "./components/templates/footer/footer.component";
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from "./components/templates/header/header.component";
import { HomeComponent } from "./views/home/home.component";
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule } from "@Angular/Material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { NavComponent } from "./components/templates/nav/nav.component";

import { RedDirective } from "./directives/red.directive";
import { registerLocaleData } from "@angular/common";

import { ProductCrudComponent } from "./components/Product/product-crud.component";
import { ProductReadComponent } from "./components/Product/product-read/product-read.component";
import { ProductUpdateComponent } from "./components/Product/product-update/product-update.component";
import { ProductDeletComponent } from "./components/Product/product-delet/product-delet.component";
import { ProductCreateComponent } from "./components/Product/product-create/product-create.component";
import localePt from "@angular/common/locales/pt";

registerLocaleData(localePt);

// import { ForDirective } from './directives/for.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeletComponent,

    // ForDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
