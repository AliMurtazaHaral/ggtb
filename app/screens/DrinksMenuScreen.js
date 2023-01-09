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
import MenuSection from '../components/MenuSection'

import { globalStyles } from '../styles/global';
import data from '../data/drinkmenu.json'

const DrinksMenuScreen = () => {
   const menu = data.items[0].entries.items;
    return (
        <SafeAreaView>
        
            <Text style={globalStyles.screenHeader}>
                Drinks 
            </Text>
             <Image style={styles.img1}
                source={require('../assets/DrinkScreenIcon.png')}
                          >               
            </Image>
            <ScrollView>
                {menu.map((section, i) => <MenuSection section={section} key={i} />)}
            </ScrollView>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
   
      img1:{
      marginTop:10,
      marginLeft:180,
      height:75,
      width:60,
      marginBottom:20

  },
})

export default DrinksMenuScreen;