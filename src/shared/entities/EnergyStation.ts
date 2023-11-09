export class EnergyStation {
  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
  readonly latitude: number;
  readonly longitude: number;
}
