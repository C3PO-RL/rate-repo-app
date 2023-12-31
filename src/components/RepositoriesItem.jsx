import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'

const RepositoriesItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>

            <StyledText fontSize='subheading' fontWeight='bold'>
                {props.fullName}
            </StyledText>
            <StyledText >
                {props.description}
            </StyledText>
            <StyledText >
                {props.language}
            </StyledText>

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
    }

})

export default RepositoriesItem