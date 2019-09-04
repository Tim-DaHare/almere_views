import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import MapView from 'react-native-maps'

const styles = StyleSheet.create({
    overviewContainer: {
        flex: 1
    },
})



const Overview = () => {
    return (
        <View style={styles.overviewContainer}>
            <MapView
                style={{ flex: 1 }}
                showsPointsOfInterest={false}
                initialRegion={{
                    latitude: 52.374363,
                    longitude: 5.216938,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

export default Overview