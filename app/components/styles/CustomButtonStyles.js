
import { StyleSheet } from 'react-native';
import { Fonts, scale, verticalScale, Colors } from '../../theme';
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: scale(50),
        justifyContent: 'center',
        borderRadius: scale(10),
        height: scale(50),
        marginHorizontal: scale(25),
        backgroundColor: colors.matBlack,
        shadowColor: Colors.initialTint,
        shadowRadius: 2,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.3,
        elevation: 1,
    },
    loginButtonDisabled: {
        opacity: 0.3,
        marginTop: scale(50),
        justifyContent: 'center',
        borderRadius: scale(10),
        height: scale(50),
        marginHorizontal: scale(25),
        backgroundColor: colors.matBlack,
        shadowColor: Colors.initialTint,
        shadowRadius: 2,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.3,
        elevation: 1,
    },
    titleStyle: {
        fontSize: scale(15),
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: Fonts.type.helveticaBold,
        textShadowColor: Colors.white,
        textShadowOffset: { width: 0.15, height: 0.15 },
        textShadowRadius: 0.1,
    },
    iconStyles: {
        height: verticalScale(20),
        width: scale(20),
        left: scale(28)
    }
});

export default styles;