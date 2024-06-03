import { Component, OnInit } from '@angular/core';
import { ProductCreateService } from '../../templates/product-create.service';
import { Router } from '@angular/router'
import { Product } from './product.model';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

product: Product = {
  name: '',
  price: null
}



  constructor(private productService: ProductCreateService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
    })

  }
  cancel(): void {
    this.router.navigate(['/products'])

  }
  
}
