import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {LayoutProvider} from './src/context/LayoutContext';
import { StackParamList } from './src/utils';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import NewProjectScreen from './src/screens/NewProjectScreen';
import NewTaskScreen from './src/screens/NewTaskScreen';
import ProjectDetailsScreen from './src/screens/ProjectDetailsScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function App() {
  return (
    <LayoutProvider>
      <NavigationContainer theme={myTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewProject" component={NewProjectScreen} />
          <Stack.Screen name="NewTask" component={NewTaskScreen} />
          <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LayoutProvider>
  );
}

export default App;
