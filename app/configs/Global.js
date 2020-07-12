import { getStatusBarHeight } from 'react-native-status-bar-height';
import { scale } from '../theme';
import { Platform } from 'react-native';
import { Toast } from 'native-base';

const statusBarHeightFunc = () => {
    const statusBarHeight = getStatusBarHeight(true);
    let bottomMarginForNotch = scale(5);
    if (Platform.OS === 'ios') {
        if (statusBarHeight === 44) {
            bottomMarginForNotch = scale(20);
        }
    }
    return bottomMarginForNotch;
}

const customToast = (message, type, position) => {
    Toast.show({
        text: message || 'Something went wrong',
        buttonText: "OK",
        position: position || "top",
        type: type || '',
        duration: 3500
    })
}

export default { statusBarHeightFunc, customToast }