
import { StyleSheet } from 'react-native';
import { Fonts, scale } from '../../../../theme';
import colors from '../../../../theme/Colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeightFunc = () => {
    const statusBarHeight = getStatusBarHeight(true);
    let top = scale(100);
    if (Platform.OS === 'ios') {
        if (statusBarHeight === 44) {
            top = scale(125);
        }
    }
    return top;
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: scale(25),
        paddingTop: statusBarHeightFunc()
    },
    errorBorder: {
        borderWidth: scale(1),
        borderColor: 'red'
    },
    loginButton: {
        marginTop: scale(50),
        justifyContent: 'center',
        borderRadius: scale(10),
        fontFamily: Fonts.type.helveticaRegular,
        height: scale(50),
        marginHorizontal: scale(25),
        backgroundColor: colors.matBlack
    },
    loginText: {
        fontSize: scale(15),
        fontFamily: Fonts.type.helveticaBold,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerText: {
        fontSize: scale(26),
        fontFamily: Fonts.type.helveticaBold,
        color: colors.matBlack,
    },
    subHeaderText: {
        fontSize: scale(14),
        color: colors.matBlack,
        fontWeight: '400',
        fontFamily: Fonts.type.helveticaRegular,
    },
    textSeparator: {
        marginTop: scale(15)
    },
    alignMent: {
        marginTop: scale(80)
    },
    loginButtonDisabled: {
        backgroundColor: colors.lightGray
    }
});

export default styles;