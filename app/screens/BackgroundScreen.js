import React from 'react'
import {
    ImageBackground,
    StyleSheet
 } from 'react-native';

const BackgroundScreen = ({ children }) => {
    return (
            <ImageBackground
                source={require('../assets/chinesefood.jpeg')}
                style={styles.background}
            >
                {children}
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
      
        height:740,
        width:415
      },
})

export default BackgroundScreen
