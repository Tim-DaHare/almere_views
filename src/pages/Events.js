import React from 'react'
import { View, ScrollView, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import visitables from '../../data/visitables.json'

const Events = ({ redirect }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text>Evenementen</Text>
            <ScrollView>
                {visitables.visitables.map((visitable, i) => {
                    if (!visitable.isEvent) return
                    return (
                        <TouchableOpacity key={i} style={styles.itemContainer} onPress={() => redirect('details', visitable)}>
                            <Image
                                style={{width: 100, height: 100, marginRight: 10 }}
                                source={{uri: visitable.imageUrl }}
                            />
                            <View>
                                <Text>
                                    Lorum ipsum
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: { 
        flexDirection: 'row', 
        borderColor: 'black', 
        paddingVertical: 10,
        borderBottomWidth: 1 
    }
})

export default Events