import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ImageBackground
} from 'react-native'

const CurrentWeather = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text>5</Text>
          <View style={styles.minMax}>
            <Text>Max : 9</Text>
            <Text>Min : 4</Text>
          </View>
          <Text>Sunny</Text>
        </View>
      </ImageBackground>
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
