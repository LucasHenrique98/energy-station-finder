import { AppRegistry } from 'react-native';
import Geocoder from 'react-native-geocoding';
import App from './src/App.tsx';
import { name as appName } from './app.json';

Geocoder.init('AIzaSyDTPrB_f-LzlJ_ULhqFIX1IWd_4l4AP1YI');

AppRegistry.registerComponent(appName, () => App);
