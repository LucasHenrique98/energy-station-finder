import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';

import EnergyPointFinderMap from '../features/EnergyPointFinder/interfaces/EnergyPointFinderMap';
import { PRIMARY } from '../styles/colors';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export default function AppNavigation(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          paddingVertical: 10,
        },
      }}
      initialRouteName="EnergyPointFinderMap">
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: () => (
            <Text
              style={{
                color: PRIMARY,
              }}>
              {t('stations')}
            </Text>
          ),
          tabBarIcon: () => (
            <FontAwesomeIcon
              color={PRIMARY}
              size={25}
              icon={faChargingStation}
            />
          ),
        }}
        name="EnergyPointFinderMap"
        component={EnergyPointFinderMap}
      />
    </Tab.Navigator>
  );
}
