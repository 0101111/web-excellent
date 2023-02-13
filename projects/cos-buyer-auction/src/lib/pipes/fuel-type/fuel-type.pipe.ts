import { Pipe, PipeTransform } from '@angular/core';

import { FuelType } from '../../models/enums/fuel-type.enum';

@Pipe({ name: 'fuelType', pure: true })
export class CosFuelTypePipe implements PipeTransform {

  transform(fuelType: number): string {
    const type: string = FuelType[fuelType];

    return type && type.length ? type : 'N/A';
  }
}
