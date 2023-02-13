import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UniWindowRefService {

  get nativeWindow(): Window {
    return window;
  }

  get queryParams(): string {
    return this.nativeWindow.location.search;
  }
}
