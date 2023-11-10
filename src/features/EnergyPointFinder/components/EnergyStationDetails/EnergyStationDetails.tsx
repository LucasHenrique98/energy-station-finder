import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { styles } from './stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function EnergyStationDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <View style={styles.addressInfo}>
          <Text>suahsuahushaushauhsuahushua</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Traçar rota</Text>
          <FontAwesomeIcon style={styles.buttonIcon} icon={faLocationArrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
