import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import ReduxNavigation from '../navigation/ReduxNavigation';
import { ApplicationStyles } from '../theme';
import SplashScreen from 'react-native-splash-screen'
import { Root } from 'native-base';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';

class RootContainer extends Component {
    componentDidMount() {
        SplashScreen.hide()
        this.handleNavigation();
    }

    handleNavigation = () => {
        const { auth: { videoData }, dispatch } = this.props;
        console.log('videoData', videoData);
        let navigateAction = NavigationActions.navigate({
            routeName: 'AuthStack'
        });
        if (videoData) {
            navigateAction = StackActions.reset({
                index: 0, actions: [NavigationActions.navigate({ routeName: 'HomeStack' })]
            });
        }
        dispatch(navigateAction);
    }

    render() {
        return (
            <Root>
                <View style={ApplicationStyles.screen.mainContainer}>
                    {console.disableYellowBox = true}
                    <ReduxNavigation />
                </View>
            </Root>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(RootContainer);
