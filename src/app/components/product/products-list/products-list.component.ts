import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  products: any[] = [];
  selectedProducts: any[] = [];
  productDialog: boolean = false;
  currentProduct: any | null = null;

  ngOnInit(): void {
    // Initialize with some sample products. You can replace this with an API call.
    this.products = [
      {
        id: 1,
        article_no: 262,
        style: 'modern',
        name: 'Laptop',
        color: 'red',
        category: 'slim fit',
        gender: 'male',
        price: 25,
      },
      {
        id: 2,
        article_no: 263,
        style: 'modern',
        name: 'Phone',
        color: 'blue',
        category: 'causal fit',
        gender: 'male',
        price: 15,
      },
      {
        id: 3,
        article_no: 264,
        style: 'modern',
        name: 'Chair',
        color: 'green',
        category: 'slim fit',
        gender: 'Female',
        price: 29,
      },
    ];
  }

  // Open the dialog to add a new product
  openNew(): void {
    console.log("new")
    this.currentProduct = {
      id: 0,
      name: '',
      image: '',
      price: 0,
      category: '',
      rating: 0,
      inventoryStatus: 'INSTOCK',
    };
    this.productDialog = true;
  }

  // Edit an existing product
  editProduct(product: any): void {
    this.currentProduct = { ...product };
    this.productDialog = true;
  }

  // Delete a specific product
  deleteProduct(product: any): void {
    this.products = this.products.filter((p) => p.id !== product.id);
    this.selectedProducts = this.selectedProducts.filter(
      (p) => p.id !== product.id
    );
  }

  // Delete all selected products
  deleteSelectedProducts(): void {
    const selectedIds = new Set(this.selectedProducts.map((p) => p.id));
    this.products = this.products.filter((p) => !selectedIds.has(p.id));
    this.selectedProducts = [];
  }

}
