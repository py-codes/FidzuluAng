import { Component, OnInit } from '@angular/core';
import { Books } from 'src/Model/books.model';
import { ZuluService } from '../service/zulu.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private service:ZuluService) { }

  books:Books[]=[];

  ngOnInit(): void {
    this.service.getBooks().subscribe(
      books=>{
        this.books=books;
      }
    );
  }

}
