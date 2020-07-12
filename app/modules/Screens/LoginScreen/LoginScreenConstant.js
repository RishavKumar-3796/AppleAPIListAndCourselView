import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/LoginScreenStyle';

export const renderHeaderText = () => (
    <Text style={styles.headerText}>{'Hi again'}</Text>
)

export const renderSubHeaderText = () => (
    <Text style={styles.subHeaderText}>{'We just need your email and password.'}</Text>
)

export const renderSeparatorView = () => (
    <View style={styles.textSeparator} />
)

export const renderAlignmentView = () => (
    <View style={styles.alignMent} />
)
