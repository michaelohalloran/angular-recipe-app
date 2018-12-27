import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(linkClicked: string) {
    this.featureSelected.emit(linkClicked);
  }

}
