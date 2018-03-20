import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchStr: string = '';

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  weather: any;
  data: any;

  constructor() {
    
   }

  ngOnInit() {
  }

  onSubmit() {

    this.search.emit(this.searchStr);
    this.searchStr = '';
    //window.location.hash = "main";
  }

}

export interface Weather {
  temp: number
}
