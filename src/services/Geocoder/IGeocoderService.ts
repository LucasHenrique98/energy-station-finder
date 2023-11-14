export type GeoLocation = {
  latitude: number;
  longitude: number;
};

export type GeoLocationAddressReturn = {
  address: string;
  latitude: number;
  longitude: number;
};

export interface IGeocoderService {
  searchByGeoLocation(coords: GeoLocation): Promise<GeoLocationAddressReturn>;
}
