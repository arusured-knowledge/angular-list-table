import {Component, Input, OnInit} from '@angular/core';
import {Ibook} from '../interfaces/ibook';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  i: number;
  @Input()
  book: Ibook;

  constructor() { }

  ngOnInit() {
  }

}
