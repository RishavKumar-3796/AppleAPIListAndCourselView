import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale, Colors, Fonts } from '../../theme'
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
    inputContainerStyles: {
        height: scale(50),
        width: '100%',
        borderColor: Colors.grayMat,
        borderRadius: scale(10),
        justifyContent: 'center',
        borderWidth: 1,
        paddingLeft: scale(25),
        color: colors.matBlack,
        fontSize: scale(14),
        marginTop: scale(20)
    },
});

export default styles;