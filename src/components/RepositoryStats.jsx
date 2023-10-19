import React from "react"
import StyledText from "./StyledText"
import { View } from "react-native"


const parseThousands = (number) => {
    return number >= 1000 ? `${Math.round(number / 100) / 10}k` : String(number)
}

const RepositoryStats = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <StyledText align='center' fontWeight='bold'>
                    {parseThousands(props.stargazersCount)}
                </StyledText>
                <StyledText align='center' >
                    Starts
                </StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>
                    {parseThousands(props.forksCount)}
                </StyledText>
                <StyledText align='center' >
                    Forks
                </StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>
                    {parseThousands(props.reviewCount)}
                </StyledText>
                <StyledText align='center' >
                    Reviews
                </StyledText>
            </View>
            <View>
                <StyledText align='center' fontWeight='bold'>
                    {parseThousands(props.ratingAverage)}
                </StyledText>
                <StyledText align='center' >
                    Rating average
                </StyledText>
            </View>

        </View>
    )
}
export default RepositoryStats