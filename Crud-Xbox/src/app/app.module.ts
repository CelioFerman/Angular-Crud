import { MatSnackBar } from '@angular/material/snack-bar';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/templates/header/header.component";

import { MatToolbarModule } from "@Angular/Material/toolbar";
import { FooterComponent } from "./components/templates/footer/footer.component";
import { NavComponent } from "./components/templates/nav/nav.component";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./views/home/home.component";
import { RedDirective } from './directives/red.directive';
import { ProductCreateComponent } from "./components/templates/product-create/product-create.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { HttpClientModule } from "@angular/common/http"


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
    ProductCreateComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
