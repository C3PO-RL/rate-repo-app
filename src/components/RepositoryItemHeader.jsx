import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import { theme } from '../theme'

const RepositoryItemHeader = ({ props }) => {
    return (
        <View>
            <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
            <StyledText fontSize='subheading' fontWeight='bold'>
                {props.fullName}
            </StyledText>
            <StyledText >
                {props.description}
            </StyledText>
            <StyledText style={styles.language}>
                {props.language}
            </StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default RepositoryItemHeader