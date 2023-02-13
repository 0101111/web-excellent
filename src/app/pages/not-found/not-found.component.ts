import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: './not-found.component.html',
})
export class PageNotFoundComponent {

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back();
  }
}
