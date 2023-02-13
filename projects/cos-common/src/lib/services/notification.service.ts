import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class UniNotificationService {

  constructor(
    private snackBar: MatSnackBar,
  ) {
  }

  notify(message: string, action: string = '', options: MatSnackBarConfig): void {
    options.duration = options.duration || 3000;
    this.snackBar.open(message, action, options);
  }
}
