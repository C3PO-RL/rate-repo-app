import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import { theme } from '../theme'
import RepositoryItemHeader from './RepositoryItemHeader'

const RepositoriesItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader props={props} />
            <RepositoryStats {...props} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 1,
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 20,
    },
})

export default RepositoriesItem