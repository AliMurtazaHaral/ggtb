import React, {
    useContext
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import {
    OrderItemsContext
} from '../context/OrderContext';

const DishSection = ({ dish }) => {
    const { addOrderedItem } = useContext(OrderItemsContext);

    const item = {
        name: dish.name,
        quantity: 1,
        price: dish.price
    };

    const handleOrder = () => {
        addOrderedItem(item);
    };

    return (
        <View
            style={styles.dishContainer}
        >
            <View>
            <Text
                style={styles.dishName}
            >
                {dish.name}
            </Text>
               <Text
                style={styles.price_amount}
            >
                {dish.price}
            </Text>
            </View>
           
             <View style={styles.add_button_view}>
                <Pressable onPress={handleOrder}>
                    <Text style={styles.add_btn}>
                           Add
                    </Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    dishContainer: {
        marginBottom: 10,
        backgroundColor: 'rgba(250,249,246,0.6)',
        padding: '3%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    dishName: {
        fontFamily: 'fugaz-one',
        fontSize: 18,
        marginBottom: 4,
        color: 'Black',
        fontWeight: 'bold',
    },
    price_amount: {
        fontFamily: 'fugaz-one',
        fontSize: 14,
        color: 'black'
    },
    add_button_view:{
    paddingTop: 5,
     paddingLeft: 20,
    },
    add_btn: {
        marginRight: -20,
        fontSize: 18,
        color: 'black',
        fontFamily: 'Courier',
        fontWeight: 'bold'
    }
})

export default DishSection;
