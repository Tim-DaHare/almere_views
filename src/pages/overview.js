import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import mapIcon from '../../assets/img/map-icon.png'

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
    navIcon: {
        width: 50,
        height: 50
    }
})

const NavIcon = ({ source }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff77', borderRadius: 100, height: 60, width: 60 }}>
            <Image style={styles.navIcon} source={source}/>
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

            </View>
            <View style={styles.navContainer}>
                <NavIcon source={mapIcon} />
            </View>
        </View>
    )
}

export default Overview