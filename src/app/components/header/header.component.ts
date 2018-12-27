import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected= new EventEmitter<string>();
  @Input() feature: string;

  constructor() { }

  ngOnInit() {
  }

  toggleFeature(linkClicked) {
    this.feature = linkClicked === 'recipes' ? 'recipes' : 'shopping';
    this.featureSelected.emit(this.feature);
  }

}
