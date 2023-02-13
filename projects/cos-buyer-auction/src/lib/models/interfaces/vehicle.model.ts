import { FuelType } from '../enums/fuel-type.enum';
import { Transmission } from '../enums/transmission.enum';

export interface AssociatedVehicle {
  id: number;
  ez: string;
  fuelType: FuelType
  mileageInKm: number;
  transmission: Transmission
  vehicleImages: VehicleImage[];
}

export interface VehicleImage {
  perspective: number;
  url: string;
}
