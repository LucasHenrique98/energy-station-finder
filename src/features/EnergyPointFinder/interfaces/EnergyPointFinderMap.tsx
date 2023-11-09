import React, { useCallback, useState, useContext, useEffect } from 'react';
import { View, Dimensions, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useFocusEffect } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import { DependencyInjectionContext } from '../../../contexts/DependencyInjection.context';

const { width, height } = Dimensions.get('screen');

export default function EnergyPointFinderMap() {
  const [region, setRegion] = useState<
    | {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
      }
    | undefined
  >(undefined);
  const [energyStationLocations, setEnergyStationLocations] = useState<
    Array<{ latitude: number; longitude: number }>
  >([]);

  const { energyPointsGateway } = useContext(DependencyInjectionContext);

  const getEnergyStationLocations = async () => {
    const locations = await energyPointsGateway.getEnergyStationsPoint();
    setEnergyStationLocations(locations);
  };

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      info => {
        setRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      () => {},
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  useFocusEffect(
    useCallback(() => {
      getCurrentPosition();
    }, []),
  );

  useEffect(() => {
    getEnergyStationLocations();
  }, []);

  return (
    <View>
      <SearchBar />
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
              key={location.latitude}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}></Marker>
          );
        })}
      </MapView>
    </View>
  );
}
