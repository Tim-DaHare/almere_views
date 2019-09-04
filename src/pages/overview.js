import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import MapView from 'react-native-maps'
import mapIcon from '../../assets/img/map-icon.png'
import eventsIcon from '../../assets/img/events-icon.png'

const styles = StyleSheet.create({
    overviewContainer: {
        backgroundColor: '#34495e',
        flex: 1
    },
    headerContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 28,
        color: '#ecf0f1'
    },
    mapContainer: {
        flex: 0.8,
        backgroundColor: 'green'
    },
    navContainer: {
        flex: 0.1,
        backgroundColor: '#34495e',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    navIconContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 100, 
        height: 60, 
        width: 60 
    },
    navIcon: {
        width: 40,
        height: 40
    }
})

const NavIcon = ({ source, isSelected }) => {
    return (
        <View style={[styles.navIconContainer, { backgroundColor: isSelected ? '#ffffff77' : 'transparant'}]}>
            <Image style={styles.navIcon} source={source} />
        </View>
    )
}

const Overview = () => {
    return (
        <View style={styles.overviewContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Almere Views</Text>
            </View>
            <View style={styles.mapContainer}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            </View>
            <View style={styles.navContainer}>
                <NavIcon source={eventsIcon} />
                <NavIcon source={mapIcon} isSelected />
            </View>
        </View>
    )
}

export default Overview