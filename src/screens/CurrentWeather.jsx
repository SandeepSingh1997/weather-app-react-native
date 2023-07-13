import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

const CurrentWeather = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>5</Text>
        <View style={styles.minMax}>
          <Text>Max : 9</Text>
          <Text>Min : 4</Text>
        </View>
        <Text>Sunny</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', backgroundColor: 'pink' },
  minMax: {
    flexDirection: 'row'
  }
})

export default CurrentWeather
