import { Component,
  EventEmitter,
  Input,
  Output,
  ViewChild } from '@angular/core';

import { Product } from '../../../types';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RatingModule, FormsModule, ButtonModule, ConfirmPopupModule],
  providers:[ConfirmationService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private confirmationService:ConfirmationService, private router: Router) {}
  
@ViewChild('deleteButton') deleteButton: any;
  @Input() product!: Product;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  editProduct(){
    this.edit.emit(this.product);
  }
  deleteProduct(){
    this.delete.emit(this.product);
  }
confirmDelete(){
  this.confirmationService.confirm({
    target:this.deleteButton.nativeElement,
    message:'Are you sure you want to delete this product?',
    accept:()=>{
      this.deleteProduct();
    },
  });

}

/*openProductPage() {
  // Assuming you have a route named 'product/:productId', where 'productId' is the ID of the product
  this.router.navigate(['/product-page', this.product.id]); // Replace 'this.product.id' with the actual ID of the product
}
//html: (click)="openProductPage()"
*/


  ngOnInit(){
    
  }

}
