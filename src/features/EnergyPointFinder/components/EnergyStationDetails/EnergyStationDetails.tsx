import { View, Text, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

import { styles } from './stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCircleXmark,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { googleMapsUrl } from '../../constants';

type EnergyStationDetailsProps = {
  destination: { address: string; latitude: number; longitude: number };
  origin: { latitude: number; longitude: number; formattedAddress: string };
  closeDetailsModal: () => void;
};

export default function EnergyStationDetails({
  destination,
  closeDetailsModal,
  origin,
}: EnergyStationDetailsProps) {
  const openAddressOnMap = () => {
    Linking.openURL(
      `${googleMapsUrl}&origin=${origin.formattedAddress}&destination=${destination.address}`,
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={closeDetailsModal}>
          <FontAwesomeIcon
            size={30}
            style={styles.closeIcon}
            icon={faCircleXmark}
          />
        </TouchableOpacity>
        <View style={styles.innerContent}>
          <View style={styles.infoWrapper}>
            <View style={styles.addressInfo}>
              <Text style={styles.addressText}>{destination.address}</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={openAddressOnMap} style={styles.button}>
              <Text style={styles.buttonText}>Traçar rota</Text>
              <FontAwesomeIcon
                style={styles.buttonIcon}
                icon={faLocationArrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
