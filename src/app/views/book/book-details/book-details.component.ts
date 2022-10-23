import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  books: Array<any>
  bookId: number | null = null;
  book: any;
  constructor(private route: ActivatedRoute) {
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
    console.log('active route', this.route)
    this.bookId = this.route.snapshot.params['id']
    if (this.bookId) this.book = this.books.find((item, index) => this.bookId == index)
  }

}
