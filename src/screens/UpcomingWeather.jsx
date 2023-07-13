import { SafeAreaView, View, Text, FlatList } from 'react-native'
import TempItem from '../components/TempItem'

const DATA = [
  {
    id: 0,
    location: 'R.K.Puram',
    max_temp: 15,
    min_temp: 5
  },
  {
    id: 1,
    location: 'R.K.Puram',
    max_temp: 13,
    min_temp: 6
  },
  {
    id: 2,
    location: 'R.K.Puram',
    max_temp: 20,
    min_temp: 5
  }
]

const renderTemp = ({ item }) => (
  <TempItem location={item.location} min={item.min_temp} max={item.max_temp} />
)

const Separator = () => (
  <View style={{ height: 2, backgroundColor: 'red' }}></View>
)

const EmptyList = () => {
  return (
    <View>
      <Text>No Data to show...</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderTemp}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={<Separator />}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </SafeAreaView>
  )
}

export default UpcomingWeather
