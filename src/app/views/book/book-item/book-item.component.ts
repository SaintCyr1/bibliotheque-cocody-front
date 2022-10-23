import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book!: any;
  @Input() index!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(index: number) {
    this.router.navigate([`/livres/${index}`])
  }

}
