import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {
  products: any[] = [];
  selectedProducts: any[] = [];
  productDialog: boolean = false;
  currentProduct: any | null = null;

  ngOnInit(): void {
    // Initialize with some sample products. You can replace this with an API call.
    this.products = [
      {
        id: 1,
        name: 'Laptop',
        email: 'example@gmail.com',
        number: 3047473764636,
      },
      {
        id: 2,
        name: 'Phone',
        email: 'example@gmail.com',
        number: 3047473764636,
      },
      {
        id: 3,
        name: 'Chair',
        email: 'example@gmail.com',
        number: 3047473764636,
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

  // Determine the severity tag color based on inventory status
  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }
}
