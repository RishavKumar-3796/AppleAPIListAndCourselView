import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/InputTextStyles';
import { Colors } from '../theme';
import colors from '../theme/Colors';

export default (InputText = ({
    refer,
    containerStyle,
    onSubmitEditing,
    returnKeyType,
    placeholderTextColor = colors.lightGray,
    placeholder = 'Input',
    onChangeText,
    value,
    multiline,
    maxLength,
    autoCorrect = false,
    onFocus,
    onBlur,
    blurOnSubmit,
    autoCapitalize,
    secureTextEntry,
    keyboardType,
    editable = true,
    spellCheck,
    onEndEditing,
    onKeyPress
}) => {
    return (
        <TextInput
            ref={refer}
            style={[styles.inputContainerStyles, containerStyle]}
            value={value}
            editable={editable}
            multiline={false}
            maxLength={maxLength}
            autoCorrect={autoCorrect}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholderTextColor={'red'}
            spellCheck={spellCheck}
            blurOnSubmit={blurOnSubmit}
            autoCapitalize={autoCapitalize}
            onEndEditing={onEndEditing}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            placeholderTextColor={placeholderTextColor}
            placeholder={placeholder}
            onChangeText={onChangeText}
            textAlignVertical={'center'}
            selectionColor={Colors.matBlack}
            keyboardType={keyboardType}
            onKeyPress={onKeyPress}
            spellCheck={true}
        />
    );
});

InputText.propTypes = {
    refer: PropTypes.func,
    containerStyle: PropTypes.object,
    onSubmitEditing: PropTypes.func,
    placeholderTextColor: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    multiline: PropTypes.bool,
    maxLength: PropTypes.number,
    autoCorrect: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    blurOnSubmit: PropTypes.bool,
    autoCapitalize: PropTypes.bool,
    secureTextEntry: PropTypes.bool
};
