import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() itemsList = [];
  openedItemIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updateIndex(i: number) {
    this.openedItemIndex = i;
  }
}
