import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent {
  @Output() colomnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;
  constructor() {}

  onSortUpdate(newSort: string):void {
    this.sort = newSort
  }
  onItemsUpdate(count:number):void{
    this.itemsShowCount = count;
  }
  onColumnsUpated(colsNum:number):void{
    this.colomnsCountChange.emit(colsNum)
  }
}
