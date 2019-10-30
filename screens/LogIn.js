import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View, TextInput,TouchableOpacity,
    Button, Text, StyleSheet
} from 'react-native'
import { userLogin } from '../actions'
import Details from './Details'
class LogIn extends Component {
    // componentDidMount() {
    //     this.checkJWT();
    // }
    static navigationOptions = {
        title: 'LOG IN',
    };
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onChangeName = (input) => {
        this.setState({
            username: input
        })
    }

    onChangePassword = (input) => {
        this.setState({
            password: input
        })
    }

    onLogin = (event) => {
        event.preventDefault()
        this.props.userLogin(this.state.username, this.state.password)
        this.setState({
            username: '',
            password: '',
        })

    }

    // checkJWT = () => {
    //     this.props.navigation.navigate(this.props.user.jwt ? 'Details' : 'LogIn');
    // };


    render() {
        if(this.props.user.jwt) {
            this.props.navigation.navigate('Details')
            return <Details navigation={this.props.navigation}/>
        }
        return (
            <View style={styles.container}  >

                <TextInput
                    value={this.state.username}
                    onChangeText={this.onChangeName}
                    placeholder="Username"
                    style={{ height: 35 }}
                />

                <TextInput
                    value={this.state.password}
                    onChangeText={this.onChangePassword}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{ height: 35 }}
                />

                <Button
                    title={'Log in'}
                    onPress={this.onLogin}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>If you are not registered yet, sign up <Text style={{color: 'blue'}}>here</Text></Text>
                </TouchableOpacity>

                {/* <Text>
                    If you are not registered yet, sign up
                </Text>
                <Button title={'here'} onPress={() => {
                    this.props.navigation.navigate('SignUp');
                }} /> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    return {
        user: state.loginReducer
    };
}


export default connect(mapStateToProps, { userLogin })(LogIn)