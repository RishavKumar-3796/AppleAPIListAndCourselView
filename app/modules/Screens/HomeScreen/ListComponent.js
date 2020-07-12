import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style/HomeScreenStyle';

const ListComponent = (props) => {
    const item = props?.item
    return (
        <View style={styles.flexView}>
            <View style={styles.imageView}>
                <Image resizeMode='cover' style={styles.imageView} source={{ uri: item?.artworkUrl100 }} />
            </View>
            <View style={styles.descView}>
                <Text style={styles.headerText}>{item?.name}</Text>
                <Text style={styles.descText}>{`Artist name : ${item?.artistName}`}</Text>
                <Text style={styles.descText}>{`Release Date: ${item?.releaseDate}`}</Text>
            </View>
        </View>
    );
}

export default ListComponent;
