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
    const { results } = await Geocoder.from(coords);
    const formattedAddress = results[0].formatted_address;

    return {
      address: formattedAddress,
      latitude: coords.latitude,
      longitude: coords.longitude,
    };
  }
}
