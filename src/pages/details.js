import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Details = ({ data = {} }) => {
    return (
        <View style={{ flex: 1}}>
            {data.imageUrl &&
                <Image
                    style={{flex: 0.4 }}
                    source={{uri: data.imageUrl }}
                />
            }
            <View style={{ flex: 0.6, padding: 10 }}>
                <Text style={styles.detailsTitle}>{data.title && data.title}</Text>
                <Text>{data.description && data.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsTitle: {
        fontSize: 32
    }
})

export default Details