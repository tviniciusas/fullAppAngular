import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-produt-read',
  templateUrl: './produt-read.component.html',
  styleUrls: ['./produt-read.component.css']
})

export class ProdutReadComponent implements OnInit {

  products: Product[] = [];
  
  displayedColumns = ['id', 'name', 'price'];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {

    this.ProductService.read().subscribe(products => {
      this.products = products
    })
  }
}
