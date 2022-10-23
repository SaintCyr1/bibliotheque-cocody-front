import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.scss']
})
export class SearchBlockComponent implements OnInit {
  searchKeyword: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log('searck keyword: ', this.searchKeyword)
  }

}
