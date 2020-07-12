
import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, scale, Colors } from '../../../../theme';
import colors from '../../../../theme/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        overflow: 'hidden'
    },
    footerStyle: {
        backgroundColor: Colors.white,
        justifyContent: 'space-around',
        borderTopWidth: scale(0.5),
        borderColor: Colors.grayMat,
        paddingHorizontal: scale(20),
        height: scale(70)
    },
    footerButton: {
        height: scale(40),
        width: scale(40),
        justifyContent: 'center',
        alignSelf: 'center',
    },
    footerImage: {
        height: scale(32),
        width: scale(32),
        alignSelf: 'center',
    },
    flexView: {
        flexDirection: 'row',
        overflow: 'hidden',
        paddingVertical: scale(5),
    },
    imageView: {
        height: scale(80),
        width: scale(65),
        borderRadius: scale(10),
        alignSelf: 'center',
    },
    descView: {
        width: '89%',
        justifyContent: 'center',
        borderBottomColor: colors.grayMat,
        borderBottomWidth: scale(0.9),
        minHeight: scale(90),
        marginLeft: scale(15),
    },
    headerText: {
        fontSize: scale(16),
        lineHeight: scale(23),
        fontFamily: Fonts.type.helveticaBold,
        color: colors.lightShadow,
        textAlign: 'left',
    },
    nameText: {
        fontSize: scale(18),
        lineHeight: scale(24),
        fontFamily: Fonts.type.helveticaBold,
        color: colors.matBlack,
        textAlign: 'center',
    },
    authorText: {
        fontSize: scale(14),
        lineHeight: scale(19),
        fontFamily: Fonts.type.helveticaRegular,
        color: colors.lightShadow,
        textAlign: 'center',
    },
    descText: {
        fontSize: scale(12),
        lineHeight: scale(18),
        fontFamily: Fonts.type.helveticaRegular,
        color: colors.lightShadow,
        textAlign: 'left',
    },
    spinnerCenterView: {
        alignSelf: 'center',
    },
    soccerView: {
        marginTop: scale(12)
    },
    flatListRefContainer: {
        paddingHorizontal: scale(15)
    },
    courselStyle: {
        marginTop: scale(45)
    },
    courselImage: {
        height: scale(270),
        width: width - 100,
        alignSelf: "center"
    }
});

export default styles;