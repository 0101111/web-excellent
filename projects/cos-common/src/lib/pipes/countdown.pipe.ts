import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

import { secondsToTime } from '../utils/seconds-to-time';

@Pipe({ name: 'secondsToTimer', pure: true })
export class CosCountdownPipe implements PipeTransform {

  transform(value: number): Observable<string> {
    return timer(0, 1000)
      .pipe(map(() => {
        value--;
        return secondsToTime(value);
      }));
  }
}
