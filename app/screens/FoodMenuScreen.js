import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Pressable,
    Text,
    StyleSheet,
    View,  
    ImageBackground,
    Image
    
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  
} from "react-native-responsive-dimensions";
import MenuSection from '../components/MenuSection'

import { globalStyles } from '../styles/global';
import data from '../data/menu.json'

const FoodMenuScreen = ({ navigation }) => {
    const menu = data.items[0].entries.items;

    return (
        
         <ImageBackground
                source={require('../assets/Menu_BG.jpeg')}
                style={styles.background1}
               >     
                <Text
                style={globalStyles.screenHeader}
            >
                Menu
            </Text>
            <Image style={styles.img}
                source={require('../assets/Menu_Screen_icon.png')}
                          >               
            </Image>
            
            <ScrollView>
                {menu.map((section, i) => <MenuSection section={section} key={i} />)}
            </ScrollView>  
            </ImageBackground>
           
        
    );
}
const styles = StyleSheet.create({
    background1: {
      
        height: responsiveHeight(100), 
    width: responsiveWidth(100), 
      },
      img:{
      marginTop:5,
      marginLeft:170,
      height:100,
      width:100,
      marginBottom:30

  },
})
export default FoodMenuScreen;