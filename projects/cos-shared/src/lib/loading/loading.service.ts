import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniLoadingService {
  private loadingSource = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingSource.asObservable();

  setLoading(isLoading: boolean) {
    this.loadingSource.next(isLoading);
  }
}
