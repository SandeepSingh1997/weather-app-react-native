import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Current" component={CurrentWeather} />
      <Tab.Screen name="Upcoming" component={UpcomingWeather} />
      <Tab.Screen name="City" component={City} />
    </Tab.Navigator>
  )
}

export default Tabs
