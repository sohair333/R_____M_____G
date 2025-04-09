import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Product } from './interface/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any | null = null;
  @Output() deleteProduct: EventEmitter<number> = new EventEmitter();
  @Output() updateProduct: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onDelete(): void {
    if (this.product) {
      this.deleteProduct.emit(this.product.id); 
    }
  }

  onUpdate(): void {
    if (this.product) {
      const updatedProduct = { ...this.product, name: 'Updated Product Name' }; 
      this.updateProduct.emit(updatedProduct); 
    }
  }
}
