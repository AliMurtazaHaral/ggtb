import React, {
    useContext
} from 'react';
import {
    SafeAreaView,
    Text,
    View,
    Pressable,
    StyleSheet
} from 'react-native';
import { OrderItemsContext } from '../context/OrderContext';
import OrderedItemSection from '../components/OrderedItemSection';

import { globalStyles } from '../styles/global';
import {
  responsiveHeight,
  responsiveWidth,
  
} from "react-native-responsive-dimensions";
const OrdersScreen = () => {
    const { orderedItems, clearOrderedItems } = useContext(OrderItemsContext);

    const clearList = () => {
        clearOrderedItems();
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text style={globalStyles.screenHeader}>
                YOUR ORDER
            </Text>
            <View style= {styles.container1}>
            <View>
                {!orderedItems && 
                <Text
                    style={styles.totalTxt}
                >
                    Your list is empty
                </Text>}
                {orderedItems && orderedItems.map((item, i) => <OrderedItemSection item={item} key={i}/>)}
            </View>
            {orderedItems && <Text
                style={styles.totalTxt}
            >
                Total = Rs 
            </Text>}
            {orderedItems && <Pressable
                style={{...globalStyles.btn, marginTop: 10}}
                onPress={clearList}
            >
                <Text
                    style={globalStyles.btnText}
                >
                    Clear Cart
                </Text>
                </Pressable>}
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container1:{
      backgroundColor: 'black',
      opacity: 0.6,
       borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 20,
      height: responsiveHeight(100), 
    width: responsiveWidth(85), 
    alignItems:'center',
    paddingTop: 30,
    },
    totalTxt: {
      marginTop: 30,
       marginBottom: 40,
        color: 'white',
        fontFamily: 'fugaz-one',
        fontSize: 25,
    },
})

export default OrdersScreen;
