import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const OrderedItemSection = ({item}) => {
    console.log('itemmmmmmmm', item);
    return (
        <View
            style={styles.itemInfoContainer}
        >
            <Text
                style={styles.itemInfo}
            >
                {item.name}
            </Text>
            <Text
                style={{...styles.itemInfo, fontSize: 15}}
            >
                {item.price} x {item.quantity}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    itemInfo: {
        fontFamily: 'lato-bold',
        color: 'white',
        fontSize: 20
    },
    itemInfoContainer: {
        marginHorizontal: 15,
        marginBottom: 10,
    }
})

export default OrderedItemSection
