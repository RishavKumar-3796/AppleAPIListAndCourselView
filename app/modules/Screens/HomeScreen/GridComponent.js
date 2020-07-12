import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style/HomeScreenStyle';

const GridComponent = (props) => {
    return (
        <>
            <Image source={{ uri: props?.item?.artworkUrl100 }} resizeMode='cover' style={styles.courselImage} />
            <View style={styles.soccerView} />
            <Text style={styles.nameText}>{props?.item?.name}</Text>
            <Text style={styles.authorText}>{props?.item?.artistName}</Text>
        </>
    );
}

export default GridComponent;
