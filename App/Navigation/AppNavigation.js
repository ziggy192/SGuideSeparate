import { StackNavigator } from 'react-navigation'
import PlacesScreen from '../Containers/PlacesScreen'
import HorizontalPlaceList from '../Containers/HorizontalPlaceList'
import SightList from '../Containers/SightList'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  PlacesScreen: { screen: PlacesScreen },
  HorizontalPlaceList: { screen: HorizontalPlaceList },
  SightList: { screen: SightList },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'PlacesScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
