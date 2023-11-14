import React, { useCallback, useState, useContext, useEffect } from 'react';
import { View, Dimensions, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useFocusEffect } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import { DependencyInjectionContext } from '../../../contexts/DependencyInjection.context';
import { getStationAddressAccordingCoords } from '../usecases';
import EnergyStationDetails from '../components/EnergyStationDetails/EnergyStationDetails';
import { styles } from './stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';

const { width, height } = Dimensions.get('screen');

type coordinate = {
  latitude: number;
  longitude: number;
};

export default function EnergyPointFinderMap() {
  const [region, setRegion] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
    formattedAddress: string;
  }>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
    formattedAddress: '',
  });
  const [energyStationLocations, setEnergyStationLocations] = useState<
    Array<coordinate>
  >([]);
  const [isEnergyStationDetailsOpen, setIsEnergyStationDetailsOpen] =
    useState(false);
  const [energyStationDetails, setEnergyStationDetails] = useState<{
    formattedAddress: string;
    latitude: number;
    longitude: number;
  }>({
    formattedAddress: '',
    latitude: 0,
    longitude: 0,
  });

  const { energyPointsGateway, geocoderService } = useContext(
    DependencyInjectionContext,
  );

  const getEnergyStationLocations = async () => {
    const locations = await energyPointsGateway.getEnergyStationsPoint();
    setEnergyStationLocations(locations);
  };

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      info => {
        getStationAddressAccordingCoords(geocoderService, {
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        }).then(addressInfo => {
          setRegion({
            latitude: info.coords.latitude,
            longitude: info.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            formattedAddress: addressInfo.formattedAddress,
          });
        });
      },
      () => {},
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  const handleEnergyStationMarkerPress = (coords: coordinate) => {
    getStationAddressAccordingCoords(geocoderService, coords).then(address => {
      setEnergyStationDetails(address);
      setIsEnergyStationDetailsOpen(true);
    });
  };

  const closeEnergyStationModal = useCallback(
    () => setIsEnergyStationDetailsOpen(false),
    [],
  );

  useFocusEffect(
    useCallback(() => {
      getCurrentPosition();
    }, []),
  );

  useEffect(() => {
    getEnergyStationLocations();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar />
      {isEnergyStationDetailsOpen && (
        <EnergyStationDetails
          closeDetailsModal={closeEnergyStationModal}
          destination={energyStationDetails}
          origin={region}
        />
      )}
      <MapView
        provider="google"
        style={{ width, height }}
        region={region}
        mapType="terrain"
        zoomEnabled
        showsUserLocation
        followsUserLocation
        loadingEnabled
        minZoomLevel={17}
        onMapReady={() => {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
        }}>
        {energyStationLocations.map(location => {
          return (
            <Marker
              onPress={({ nativeEvent: { coordinate } }) =>
                handleEnergyStationMarkerPress(coordinate)
              }
              key={location.latitude}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}>
              <FontAwesomeIcon
                color="#3f3f3f"
                size={25}
                icon={faChargingStation}
              />
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}
