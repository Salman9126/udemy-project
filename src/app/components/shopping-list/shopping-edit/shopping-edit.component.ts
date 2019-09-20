import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addNewIngredient() {
    console.log('nameInput = ' + this.nameInput.nativeElement.value + ' amountInput = ' + this.amountInput.nativeElement.value);

    this.newIngredient.emit(new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    ));

  }

}
