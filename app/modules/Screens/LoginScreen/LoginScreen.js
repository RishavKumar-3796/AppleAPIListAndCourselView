import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Keyboard, StatusBar } from 'react-native';
import { Container, Spinner, Content } from 'native-base';
import { SafeAreaView, StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { ApplicationStyles } from '../../../theme';
import styles from './styles/LoginScreenStyle';
import InputText from '../../../components/InputText';
import { renderHeaderText, renderSeparatorView, renderSubHeaderText, renderAlignmentView } from './LoginScreenConstant';
import CustomButton from '../../../components/CustomButton';
import Global from '../../../configs/Global';
import { loginRequest } from '../../../redux/actions/Auth';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../../theme/Colors';


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: false,
            isLoading: false
        };
    }


    componentDidUpdate(prevProps) {
        const { auth } = this.props;
        if (prevProps?.auth?.fetching && !auth?.fetching) this.handleResponse();
    };

    handleResponse = () => {
        const { auth: { loginData, error } } = this.props;

        if (loginData && error === null) {
            this.setState({ isLoading: false }, () => {
                this.handleNavigation();
            });
        } else if (error !== null) this.setState({ isLoading: false }, () => Global.customToast(error, 'danger'));
    };

    handleNavigation = () => {
        const { navigation } = this.props
        let resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'HomeStack' })]
        });
        navigation.dispatch(resetAction);
    }


    renderTextInput = (refName, nextRef, placeholder, returnKeyType, stateName, func) => {
        let isPassword = refName === 'password'
        const { emailError, password } = this.state
        let borderEmailError = emailError && styles.errorBorder
        let borderPasswordError = password.length < 5 && password.length > 0 && styles.errorBorder
        return (
            <InputText
                refer={(input) => this[refName] = input}
                containerStyle={!isPassword ? borderEmailError : borderPasswordError}
                onSubmitEditing={() => isPassword ? Keyboard.dismiss() : this[nextRef].focus()}
                placeholder={placeholder}
                returnKeyType={returnKeyType}
                keyboardType={isPassword ? 'email-address' : 'default'}
                onChangeText={(text) => func(text)}
                value={this.state[stateName]}
                autoCapitalize={'none'}
                secureTextEntry={isPassword}
                blurOnSubmit={false}
            />
        )
    }

    onLoginPress = () => {
        const { loginUser } = this.props;
        const { email, password } = this.state;
        let postData = { email, password }
        this.setState({ isLoading: true }, () => loginUser(postData))
    }

    renderLoginButton = () => {
        const { emailError, password, isLoading } = this.state
        let isDisabled = true;
        !emailError && !isLoading && password.length > 5 ? isDisabled = false : isDisabled = true;
        return (
            <CustomButton btnStyle={isDisabled ? styles.loginButtonDisabled : styles.loginButton}
                disabled={isDisabled || isLoading}
                loading={isLoading}
                onPress={() => this.onLoginPress()}
                title={'Login'}>
            </CustomButton>
        )
    }

    onEmailEditing = (text) => {
        this.setState({ email: text }, () => {
            const { email } = this.state
            if (email.length > 0) {
                if (emailRegex.test(email) === false) {
                    this.setState({ emailError: true })
                }
                else this.setState({ emailError: false })
            }
            else this.setState({ emailError: false })
        })
    }

    onPasswordEditing = (text) => {
        this.setState({ password: text })
    }

    render() {
        return (
            <SafeAreaView style={ApplicationStyles.screen.safeAreaViewContainer} forceInset={{ bottom: 'never' }}>
                <StatusBar backgroundColor={colors.transparent} barStyle={'dark-content'} />

                <Container style={styles.containerStyle}>
                    <Content showsVerticalScrollIndicator={false}>
                        {renderHeaderText()}
                        {renderSeparatorView()}
                        {renderSubHeaderText()}
                        {renderAlignmentView()}
                        {this.renderTextInput('login', 'password', 'Email address', 'next', 'email', this.onEmailEditing)}
                        {this.renderTextInput('password', null, 'Password', 'done', 'password', this.onPasswordEditing)}
                        {this.renderLoginButton()}
                    </Content>
                </Container>
            </SafeAreaView>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    loginUser: (data) => dispatch(loginRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
