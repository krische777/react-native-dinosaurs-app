import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View, TextInput, TouchableOpacity,
    Button, Text, StyleSheet
} from 'react-native'
import { userLogin } from '../actions'
import Details from './Details'
import { getDinosaurs } from '../actions'


class LogIn extends Component {
    componentDidMount() {
        this.props.getDinosaurs()
    }

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


    render() {
        if (this.props.user.jwt) {
            this.props.navigation.navigate('Details')
            return <Details navigation={this.props.navigation} />
        }
        return (
            <View style={styles.container}>

                <TextInput style={styles.inputBox}
                    value={this.state.username}
                    onChangeText={this.onChangeName}
                    placeholder="Username"
                    style={{ height: 35, borderColor: 'gray', borderWidth: 1, backgroundColor: '#e6ff99' }}
                />

                <TextInput style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={this.onChangePassword}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{ height: 35, borderColor: 'gray', borderWidth: 1, backgroundColor: '#e6ff99' }}
                />

                <Button
                    title={'Log in'}
                    onPress={this.onLogin}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>If you are not registered yet, sign up <Text style={{ color: 'blue' }}>here</Text></Text>
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
    inputBox: {
        width: 300,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10
    },
});

const mapStateToProps = (state) => {
    return {
        user: state.loginReducer,
        dinosaursState: state.dinosaursReducer
    };
}


export default connect(mapStateToProps, { userLogin, getDinosaurs })(LogIn)