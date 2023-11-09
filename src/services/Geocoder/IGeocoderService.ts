export type GeoLocation = {
  latitude: number;
  longitude: number;
};

export type GeoLocationAddressReturn = {
  address: string;
  number: number;
  zipCode: string;
  city: string;
  state: string;
};

export interface IGeocoderService {
  searchByGeoLocation(coords: GeoLocation): Promise<GeoLocationAddressReturn>;
}
