import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TextInput, 
         Button, Text } from 'react-native'
import {userLogin} from '../actions'

class LogIn extends Component {
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

    onRedirect = (event) => {
    }


    render() {
        return (
            <View>  

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

                <Text>
                    If you are not registered yet, sign up
                </Text> 
                <Button title={'here'} onPress={this.onRedirect}/>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.signupReducer
    };
}


export default connect(mapStateToProps, { userLogin })(LogIn)