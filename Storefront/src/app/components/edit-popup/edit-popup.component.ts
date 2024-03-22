import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

import { Product } from '../../../types';
import { FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule,  CommonModule, FormsModule, RatingModule, ButtonModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.css'
})
export class EditPopupComponent {
  @Input() display:boolean=false;
  @Output() displayChange=new EventEmitter<boolean>();
  @Output() confirm = new EventEmitter<Product>();
  @Input() header!:string;

  @Input() product: Product = {
    name:'',
    image:'',
    price:'',
    rating:0,
  };

  onConfirm(){
    this.confirm.emit(this.product);
    this.display=false;
    this.displayChange.emit(this.display);
  }
  
  onCancel(){
    this.display=false;
    this.displayChange.emit(this.display);
  }
}
