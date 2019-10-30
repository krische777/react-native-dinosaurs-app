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

    componentDidMount() {
        // if(this.props.user.username) {
        //     this.props.navigation.navigate('LogIn')
        // }
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
        // if(this.props.user.username){
        //     return <LogIn/>
        //   }
        if(this.props.user.username) {
            this.props.navigation.navigate('LogIn')
            return <LogIn navigation={this.props.navigation}/>
        }
        return (

            <View style={styles.container}>
                <Text>Welcome to the dinosaurs app</Text>
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

                <TouchableOpacity onPress={() => this.props.navigation.navigate('LogIn')}>
                    <Text>If you already have an account, log in <Text style={{ color: 'blue' }}>here</Text></Text>
                </TouchableOpacity>
                {/* <Text>
                    If you already have an account, log in
                </Text>
                <Button title={'here'} onPress={() => {
                    this.props.navigation.navigate('LogIn');
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
        user: state.signupReducer
    };
}


export default connect(mapStateToProps, { addUser })(SignUp)