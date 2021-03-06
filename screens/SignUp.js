import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View, TextInput, StyleSheet,
    Button, Text, TouchableOpacity
} from 'react-native'
import { addUser } from '../actions'
import Details from './Details'
import LogIn from './LogIn'

class SignUp extends Component {
    static navigationOptions = {
        title: 'SIGN UP',
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

    onSignup = (event) => {
        event.preventDefault()
        this.props.addUser(this.state.username, this.state.password)
        this.setState({
            username: '',
            password: '',
        })

    }



    render() {
        console.log('this.props.user', this.props.user)
        console.log('navigation', this.props.navigation)

        if (this.props.user.username) {
            this.props.navigation.navigate('LogIn')
            return <View style={styles.container}><LogIn navigation={this.props.navigation} /></View>

        }
        return (

            <View style={styles.container}>

                <TextInput
                    value={this.state.username}
                    onChangeText={this.onChangeName}
                    placeholder="Username"
                    style={{
                        height: 35, borderColor: 'gray', borderWidth: 1, backgroundColor: '#e6ff99'
                    }}
                />

                <TextInput
                    value={this.state.password}
                    onChangeText={this.onChangePassword}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{ height: 35 }}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#e6ff99' }}

                />

                <Button
                    title={'Sign up'}
                    onPress={this.onSignup}
                />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('LogIn')}>
                    <Text>If you already have an account, log in <Text style={{ color: 'blue' }}>here</Text></Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#bad184',
        paddingLeft: 100,
        paddingRight: 100
    },
});

const mapStateToProps = (state) => {
    return {
        user: state.signupReducer
    };
}


export default connect(mapStateToProps, { addUser })(SignUp)