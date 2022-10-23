import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  books: Array<any>
  p: number = 1;
  constructor(private router: Router) {
    this.books = [
      {
        title: "Mon super livre",
        author: "Guillaume Musolini",
        shortDescription: "Un marchand..."
      },
      {
        title: "Mon super livre",
        author: "Guillaume Musolini",
        shortDescription: "Un marchand..."
      },
      {
        title: "Mon super livre",
        author: "Guillaume Musolini",
        shortDescription: "Un marchand..."
      },
      {
        title: "Mon super livre",
        author: "Guillaume Musolini",
        shortDescription: "Un marchand..."
      },
      {
        title: "Mon super livre",
        author: "Guillaume Musolini",
        shortDescription: "Un marchand..."
      },
      {
        title: "Mon super livre",
        author: "Guillaume Musolini",
        shortDescription: "Un marchand..."
      },
      {
        title: "Mon super livre",
        author: "Guillaume Musolini",
        shortDescription: "Un marchand..."
      },
      {
        title: "Mon super livre",
        author: "Guillaume Musolini",
        shortDescription: "Un marchand..."
      },
      {
        title: "Mon super livre",
        author: "Guillaume Musolini",
        shortDescription: "Un marchand..."
      }
    ]
  }

  ngOnInit(): void {
  }

  showDetails(index: number) {
    console.log({ index })
    this.router.navigate([`/livres/${index}`])
  }

}
