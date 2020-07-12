import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/CustomButtonStyles';
import { Spinner } from 'native-base';
import colors from '../theme/Colors';

export default CustomButton = ({ onPress, title, btnStyle, textStyle, disabled, loading }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, btnStyle]}
            disabled={disabled}>
            {loading ? <Spinner size='small' color={colors.matBlack} /> :
                <Text style={[styles.titleStyle, textStyle]}>{title}</Text>}
        </TouchableOpacity>
    );
};

CustomButton.propTypes = {
    onPress: PropTypes.func,
    iconImage: PropTypes.string,
    title: PropTypes.string,
    btnStyle: PropTypes.object,
    textStyle: PropTypes.object,
    iconStyles: PropTypes.object
}
