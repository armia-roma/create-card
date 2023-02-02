import { StyleSheet,  View } from 'react-native';
import { useFonts } from 'expo-font';
import Card from './src/components/Card';
import Slider from './src/components/Slider';
import AppScreen from './AppScreen';
import LoginScreen from './LoginScreen';
import TestSnipt from './TestSnipt';
import ImageInput from './src/components/ImageInput';
import ImageInputScreen from './ImageInputScreen';
export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./src/assets/fonts/Inter-Black.otf'),
  });
  return (
    // <Slider></Slider>
    // <AppScreen />
    // <TestSnipt/>
    <ImageInputScreen></ImageInputScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  image: {
    height: 200
  }
});
