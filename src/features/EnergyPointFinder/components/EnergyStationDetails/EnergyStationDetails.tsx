import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { styles } from './stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCircleXmark,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';

type EnergyStationDetailsProps = {
  address?: string;
};

export default function EnergyStationDetails({
  address,
}: EnergyStationDetailsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity>
          <FontAwesomeIcon
            size={30}
            style={styles.closeIcon}
            icon={faCircleXmark}
          />
        </TouchableOpacity>
        <View style={styles.innerContent}>
          <View style={styles.infoWrapper}>
            <View style={styles.addressInfo}>
              <Text style={styles.addressText}>{address}</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.button}>
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
