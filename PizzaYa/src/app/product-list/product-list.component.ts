import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productos: Producto[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
