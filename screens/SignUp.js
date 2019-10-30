import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TextInput, 
         Button, Text } from 'react-native'
import {addUser} from '../actions'

class SignUp extends Component {
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

    onSignup = (event) => {
        event.preventDefault()
        this.props.addUser(this.state.username, this.state.password)
        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        console.log('navigation',this.props.navigation)

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
                    title={'Sign up'}
                    onPress={this.onSignup}
                />

                <Text>
                    If you already have an account, log in 
                </Text> 
                <Button title={'here'} onPress={() => {
              //this.props.navigation.navigate('LogIn');
            }}/>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.signupReducer
    };
}


export default connect(mapStateToProps, { addUser })(SignUp)