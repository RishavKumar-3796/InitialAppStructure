import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import ReduxNavigation from '../navigation/ReduxNavigation';
import { ApplicationStyles } from '../theme';
import SplashScreen from 'react-native-splash-screen'
import { Root } from 'native-base';
import { connect } from 'react-redux';

class RootContainer extends Component {
    componentDidMount() {
        SplashScreen.hide()
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
