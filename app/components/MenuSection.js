import React, {
    useState
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native'
import DishSection from './DishSection';

const MenuSection = ({ section }) => {
    const [ sectionVisible, setSectionVisible ] = useState(false);

    return (
        <View style={sectionVisible && styles.containerbackground}>
            <Text
                style={!sectionVisible ? styles.sectionHeading : {...styles.sectionHeading, color: 'black'}}
            >
                {section.name}
                <Pressable
                    onPress={() => setSectionVisible(!sectionVisible)}
                >
                    <Text
                        style={!sectionVisible ? styles.expandBtn : {...styles.expandBtn, color: 'black'}}
                    >
                        {!sectionVisible ? '+ See dishes' : '- hide'}
                    </Text>
                </Pressable>
            </Text>
            {sectionVisible && 
                <View
                    style={styles.dishBackground}
                >
                    {section.entries.items.map((dish, i) => <DishSection dish={dish} key={i} />)}
                </View>    
            }
        </View>
    )
};

const styles = StyleSheet.create({
    sectionHeading: {
        fontFamily: 'fugaz-one',
        color: 'black',
        fontSize: 25,
        textAlign: 'center'
    },
    expandBtn: {
        fontFamily: 'fugaz-one',
        color: 'black',
        marginLeft: 15,
         fontSize: 20,
    },
    dishBackground: {
        padding: '3%',
    },
    containerbackground: {
        backgroundColor: 'grey',
        opacity: 0.8,
        marginHorizontal: '10%',
        borderRadius: 10
    }
})

export default MenuSection
