import {Component, OnInit} from '@angular/core';
import {Ibook} from './interfaces/ibook';
import data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books: Ibook[] = data.books;

  ngOnInit() {}
}
