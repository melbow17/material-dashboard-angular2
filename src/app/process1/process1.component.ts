import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-process1',
  templateUrl: './process1.component.html',
  styleUrls: ['./process1.component.css']
})
export class Process1Component implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  fileName = 'Algo'
  constructor() { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Avales y Disponibles' },
      { item_id: 2, item_text: 'Oficina Bancaria' },
      { item_id: 3, item_text: 'Renta Fija' },
      { item_id: 4, item_text: 'Préstamos y Depósitos' },
      { item_id: 5, item_text: 'Colaterales' }
    ];
    this.selectedItems = [
      /*{ item_id: 3, item_text: 'Avales y Disponibles' }*/
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}