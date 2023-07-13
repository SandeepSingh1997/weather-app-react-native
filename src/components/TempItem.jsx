import { View, Text } from 'react-native'

const TempItem = ({ location, max, min }) => {
  return (
    <View>
      <Text>location: {location}</Text>
      <Text>min: {min}</Text>
      <Text>max: {max}</Text>
    </View>
  )
}

export default TempItem
