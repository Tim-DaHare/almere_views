import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import Overview from './pages/Overview'
import Details from './pages/Details'
import Visitables from './pages/Visitables'
import arrowLeftIcon from '../assets/img/arrow-left-icon.png'
import mapIcon from '../assets/img/map-icon.png'
import eventsIcon from '../assets/img/events-icon.png'
import visitablesIcon from '../assets/img/visitables-icon.png'
import Events from './pages/Events'

const NavIcon = ({ source, onPress, isSelected }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={[styles.navIconContainer, { backgroundColor: isSelected ? '#ffffff77' : '#34495e'}]}>
            <Image style={styles.navIcon} source={source} />
        </TouchableOpacity>
    )
}

const App = () => {
    const [page, setPage] = useState('overview')
    const [pageData, setPageData] = useState({})

    const redirect = (route, data = {}) => {
        setPage(route)
        setPageData(data)
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.headerContainer}>
                {page === 'details' &&
                    <TouchableOpacity style={styles.backButton} onPress={() => redirect(pageData.isEvent ? 'events' : 'visitables')}>
                        <Image source={arrowLeftIcon} style={{ width: '100%', height: '100%' }} />
                    </TouchableOpacity>
                }
                <Text style={styles.headerText}>Almere Views</Text>
            </View>
            <View style={styles.pageContainer}>
                {page === 'overview' &&
                    <Overview 
                        redirect={redirect} 
                    />
                }
                {page === 'details' &&
                    <Details 
                        redirect={redirect}  
                        data={pageData} 
                    />
                }
                {page === 'visitables' &&
                    <Visitables 
                        redirect={redirect}
                    />
                }
                {page === 'events' &&
                    <Events 
                        redirect={redirect}
                    />
                }
            </View>
            <View style={styles.navContainer}>
                <NavIcon isSelected={page === 'events'} source={eventsIcon} onPress={() => redirect('events')} />
                <NavIcon isSelected={page === 'overview'} source={mapIcon} onPress={() => redirect('overview')} />
                <NavIcon isSelected={page === 'visitables'} source={visitablesIcon} onPress={() => redirect('visitables')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },  
    backButton: {
        position: 'absolute',
        height: 50,
        width: 50,
        left: 10
    },
    headerContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34495e',
    },
    headerText: {
        fontSize: 28,
        color: '#ecf0f1'
    },
    pageContainer: {
        flex: 0.8
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

export default App
