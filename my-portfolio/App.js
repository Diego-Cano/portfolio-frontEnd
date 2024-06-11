import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutMe from './screens/AboutMe';
import Portfolio from './screens/Portfolio';
import RealEstate from './screens/RealEstate';
import MoreAboutMe from './screens/MoreAboutMe';
import ContactMe from './screens/ContactMe';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AboutMe">
          <Stack.Screen name="AboutMe" component={AboutMe} />
          <Stack.Screen name="Portfolio" component={Portfolio} />
          <Stack.Screen name="RealEstate" component={RealEstate} />
          <Stack.Screen name="MoreAboutMe" component={MoreAboutMe} />
          <Stack.Screen name="ContactMe" component={ContactMe} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
