import { IGeocoderService } from '../../services/Geocoder/IGeocoderService';

export async function getStationAddressAccordingCoords(
  geocoder: IGeocoderService,
  coords: { latitude: number; longitude: number },
) {
  return geocoder.searchByGeoLocation(coords);
}
