import React, {
    createContext,
    useEffect,
    useState
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const OrderItemsContext = createContext();

export const OrderItemsProvider = ({ children }) => {
    const [ orderedItems, setOrderedItems ] = useState(null);

    const getOrderedItems = async () => {
        try {
            const existingOrders = await AsyncStorage.getItem('@orderKey');
            if (existingOrders !== null) {
                console.log('in getOrderedItems', JSON.parse(existingOrders));
                setOrderedItems(JSON.parse(existingOrders));
            } else {
                setOrderedItems(null);
            }
            return;
        } catch (e) {
            console.log('error in OrderContext', e);
        }
    };

    let fetchedOrders = [];

    const addOrderedItem = async (item) => {
        const fetchedData = await AsyncStorage.getItem('@orderKey');

        try {
            if (!fetchedData) {
                fetchedOrders.push(item);
                await AsyncStorage.setItem('@orderKey', JSON.stringify(fetchedOrders));
                getOrderedItems();
            }

            if (fetchedData) {
                const existingOrders = JSON.parse(fetchedData);
                // console.log('existing orders...........', existingOrders);
                existingOrders.forEach(element => {
                    fetchedOrders.push(element);
                });
                fetchedOrders.push(item);
                // console.log('fetched Orders............', fetchedOrders);
                await AsyncStorage.setItem('@orderKey', JSON.stringify(fetchedOrders));
                getOrderedItems();
            }
        } catch (e) {
            console.log('error in addOrderedItem', e);
        }
    }

    const clearOrderedItems = async () => {
        try {
            setOrderedItems(null);
            await AsyncStorage.clear();
        } catch(e) {
            console.log('error in clearOrderedItems', e);
        }
        console.log('clearOrderedItems has run');
    };

    useEffect(() => {
        console.log('in useEffect checking state updated',orderedItems);
    }, [orderedItems]);

    useEffect(() => {
        getOrderedItems();
    }, []);

    return (
        <OrderItemsContext.Provider value={{
            addOrderedItem,
            clearOrderedItems,
            orderedItems
        }}>
            {children}
        </OrderItemsContext.Provider>
    )
}