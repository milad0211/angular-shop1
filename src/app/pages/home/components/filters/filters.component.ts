import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrl: "./filters.component.css",
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ["shoes", "sporst"];


  constructor(){}
  onShowCategory(category: string):void {
    this.showCategory.emit(category);
  }
}
