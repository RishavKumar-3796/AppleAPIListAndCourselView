import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Images, Icons } from '../theme';
import styles from './styles/HeaderStyles';

export default CustomHeader = (props) => {
    return (
        <View style={styles.headerStyle}>
            {props?.showBack &&
                <TouchableOpacity
                    style={styles.backButton}
                    hitSlop={styles.hitSlop}
                    onPress={() => props.onPress()}>
                    <Text style={styles.backText}>{'Back'}</Text>
                </TouchableOpacity>
            }
            <Text style={styles.titleText}>{props?.title}</Text>
        </View>
    )
}

