import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Details from './components/Details';
import Home from './components/Home';
import AppLoading from 'expo-app-loading';





const Stack= createStackNavigator()
const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}
export default function App() {
  const [loaded]=useFonts({
    InterBold:require('./assets/fonts/Inter-Bold.ttf'),
    InterBold:require('./assets/fonts/Inter-Light.ttf'),
    InterBold:require('./assets/fonts/Inter-Medium.ttf'),
    InterBold:require('./assets/fonts/Inter-Regular.ttf'),
    InterBold:require('./assets/fonts/Inter-SemiBold.ttf'),
  });
 

  if (!loaded) {
    return <AppLoading/>
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
