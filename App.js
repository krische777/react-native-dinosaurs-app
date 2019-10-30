import store from './store'
import { Provider } from 'react-redux'
import React from 'react';
import {SafeAreaView,View,StatusBar} from 'react-native';
import SignUp from './screens/SignUp'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  };
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUp navigation={this.props.navigation} />
      </View>
    );
  }
}
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
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
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
      <SafeAreaView>
    {/* <SignUp styles={this.styles}/> */}
    <AppContainer />
      </SafeAreaView>
    </Provider>
  );
};


export default App;
