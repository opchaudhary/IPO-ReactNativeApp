import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './app/Registration.js';
import Login from './app/Login.js';
import Layout from './app/home/Layout'
import CurrencyExScreen from './app/home/CurrencyExchange.js';
import IpoFetcher from './app/Ipo/IpoFetcher.js';


const Stack = createStackNavigator();

const App = () => {
  return (
 
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Layout}/>
        <Stack.Screen name="Exchange" component={CurrencyExScreen}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="IPOs" component={IpoFetcher} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
