import store from './store'
import { Provider } from 'react-redux'
import React from 'react';
import {SafeAreaView,View,Text,
   StatusBar, StyleSheet} from 'react-native';
import SignUp from './screens/SignUp'
import LogIn from './screens/LogIn'
import Details from './screens/Details'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'SIGN UP',
  };
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  render() {
    console.log('navigation in app.js', this.props.navigation.navigate)
    return (
      <View  style={styles.container} >
        <Text styles={{alignItems: 'center', justifyContent: 'center', flex: 2}}>Welcome to the dinosaurs app</Text>
        <SignUp navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container: {
   flex: 1,
   //alignItems: 'center',
   justifyContent: 'center',
}, });

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    SignUp: {
      screen: SignUp,
    },
    LogIn: {
      screen: LogIn,
    },
    Details: {
      screen: Details
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App= ()=> {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
    {/* <SignUp styles={this.styles}/> */}
    <AppContainer />
      </SafeAreaView>
    </Provider>
  );
};


export default App;
