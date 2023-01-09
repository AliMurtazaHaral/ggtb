import React, {
    useContext
} from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    Button
} from 'react-native';
import { OrderItemsContext } from '../context/OrderContext';
import {
    globalStyles
} from '../styles/global';

const StartScreen = ({ navigation }) => {  
    const { clearOrderedItems } = useContext(OrderItemsContext);
    
    const clearItems = () => {
        clearOrderedItems();
    }
    return (
        <SafeAreaView style={globalStyles.container}>
             <Image style={styles.imgLogo}
                source={require('../assets/logo_GT.png')}
              
            >
               
            </Image>
            {/* <Button title='Clear storage' onPress={clearItems} /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  
    btnContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: '10%',
    },
    headingText: {
        fontFamily: 'fugaz-one',
        fontSize: 100,
        marginTop: 20,
        color: '#FAF9F6',
        textAlign: 'center',
    },
    imgLogo:{
      marginTop:100,
      marginLeft:50,
      height:200,
      width:300,
      marginBottom:50

  },
})

export default StartScreen;