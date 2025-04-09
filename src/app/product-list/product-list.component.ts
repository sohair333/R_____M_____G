import { Component } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];

  constructor(private productService: ProductsService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products;
      console.log(this.products, "pro");

    });
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== productId);
    });
    this.messageService.add({
      severity: 'success',
      summary: 'Deleted',
      detail: 'Product deleted successfully',
      life: 3000
    });
  }

  editMode = false;
  selectedProduct: any = null;
  updateProduct(product: any): void {
    this.editMode = true;
    this.selectedProduct = product;
  }

  saveUpdatedProduct(product: any): void {
    this.productService.updateProduct(product).subscribe((updated: any) => {
      const index = this.products.findIndex(p => p.id === updated.id);
      if (index !== -1) {
        this.products[index] = updated;
      }
      this.editMode = false;
      this.selectedProduct = null;
      this.messageService.add({
        severity: 'success',
        summary: 'Updated',
        detail: 'Product updated',
        life: 3000
      });
    });
  }

  cancelEdit(): void {
    this.editMode = false;
    this.selectedProduct = null;
  }
}
