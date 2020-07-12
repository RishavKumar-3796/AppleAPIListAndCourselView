import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Footer } from 'native-base';
import styles from './style/HomeScreenStyle';
import { Icons } from '../../../theme';

export const FooterComponent = (props) => {
    const [footerTabSelected, setFooterTabSelected] = useState('grid')

    const renderFooterButtons = (image, value) => (
        <TouchableOpacity style={styles.footerButton} onPress={() => [props?.updateFooterButtonState(value), updateFooterButtonState(value)]}
            disabled={value === footerTabSelected}>
            <Image source={image} resizeMode='contain' style={styles.footerImage} />
        </TouchableOpacity>
    )

    const updateFooterButtonState = (value) => {
        setFooterTabSelected(value)
    }

    const isListSelected = footerTabSelected === 'list'

    return (
        <Footer style={styles.footerStyle}>
            {isListSelected ?
                <>
                    {renderFooterButtons(Icons.grid, 'grid')}
                    {renderFooterButtons(Icons.listSelected, 'list')}
                </> :
                <>
                    {renderFooterButtons(Icons.gridSelected, 'grid')}
                    {renderFooterButtons(Icons.list, 'list')}
                </>
            }
        </Footer>
    );
}