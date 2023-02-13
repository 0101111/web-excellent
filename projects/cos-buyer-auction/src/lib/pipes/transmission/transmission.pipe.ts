import { Pipe, PipeTransform } from '@angular/core';

import { Transmission } from '../../models/enums/transmission.enum';

@Pipe({ name: 'transmission', pure: true })
export class CosTransmissionPipe implements PipeTransform {

  transform(transmission: number): string {
    const type: string = Transmission[transmission];

    return (type && type.length ? type : 'N/A') + ' Transmission';
  }
}
