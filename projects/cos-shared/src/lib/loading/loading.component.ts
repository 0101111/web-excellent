import { Component, Input } from '@angular/core';

import { UniLoadingService } from './loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'uni-loader',
  template: `
    <ng-container *ngIf='isLoading$ | async'>
      <mat-progress-bar *ngIf='linear' mode="indeterminate"></mat-progress-bar>

      <div *ngIf='!linear' class='uni-loading-shade'>
        <mat-spinner></mat-spinner>
      </div>
    </ng-container>

  `,
  styles: [`
    .uni-loading-shade {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.15);
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `],
})
export class UniLoadingComponent {

  @Input()
  linear: boolean = false;

  isLoading$: Observable<boolean>;

  constructor(private loadingService: UniLoadingService) {
    this.isLoading$ = this.loadingService.isLoading$;
  }
}
