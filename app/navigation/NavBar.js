import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import icLogo from '../assets/icons/logo.png';
import icBack from '../assets/icons/back_white.png';
import icSearch from '../assets/icons/search.png';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { width: undefined };
    }

    renderRight() {
        const windowWidth = Dimensions.get('window').width;
        const width = this.state.width
            ? (windowWidth - this.state.width) / 2
            : undefined;

        const renderRightContent = () => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                <Image source={icSearch} style={styles.icBack} />
            </TouchableOpacity>
        );

        return (
            <View style={[{ width }, styles.right]}>
                {renderRightContent()}
            </View>
        );
    }

    renderLeft() {
        const windowWidth = Dimensions.get('window').width;
        const width = this.state.width
            ? (windowWidth - this.state.width) / 2
            : undefined;

        const renderLeftContent = () => {
            if (this.props.navigation.state.routeName !== 'Home') {
                return (
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={icBack} style={styles.icBack} />
                        </TouchableOpacity>
                    </View>
                );
            }

            return (
                <View>
                    <Image source={icLogo} style={styles.icStyle} />
                </View>
            );
        };

        return (
            <View style={[{ width }, styles.left]}>
                {renderLeftContent()}
            </View>
        );
    }


    renderTitle() {
        return (
            <View style={styles.title}>
                <Text style={styles.text}>iFan</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderTitle()}
                {this.renderLeft()}
                {this.renderRight()}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,
        marginVertical: 5,
        //justifyContent: 'flex-end',
        backgroundColor: '#fff',
        //alignItems: 'space-between',
        //zIndex: 100
    },
    icStyle: {
        width: 50,
        height: 50,
    },
    icBack: {
        width: 30,
        height: 30,
        tintColor: '#000'
    },
    text: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
    },
    left: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    },
    right: {
        position: 'absolute',
        right: 5,
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    },
    title: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
