import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-book',
  templateUrl: './latest-book.component.html',
  styleUrls: ['./latest-book.component.scss']
})
export class LatestBookComponent implements OnInit {
  books: Array<any>
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
    this.router.navigate([`/livres/${index}`])
  }

}
