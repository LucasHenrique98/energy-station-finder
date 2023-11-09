import Geocoder from 'react-native-geocoding';
import {
  GeoLocation,
  GeoLocationAddressReturn,
  IGeocoderService,
} from './IGeocoderService';

export class RNGeocoding implements IGeocoderService {
  async searchByGeoLocation(
    coords: GeoLocation,
  ): Promise<GeoLocationAddressReturn> {
    const address = await Geocoder.from(coords);

    return {
      address: '',
      city: '',
      number: 1,
      state: '',
      zipCode: '',
    };
  }
}
