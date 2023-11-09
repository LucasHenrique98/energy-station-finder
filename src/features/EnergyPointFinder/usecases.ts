import { IGeocoderService } from '../../services/Geocoder/IGeocoderService';

export async function getAddressAccordingCoords(
  geocoder: IGeocoderService,
  coords: { latitude: number; longitude: number },
) {
  return await geocoder.searchByGeoLocation(coords);
}
