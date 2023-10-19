import React from 'react'
import { View, FlatList } from 'react-native'
import { repositories } from '../data/repositories'
import RepositoriesItem from './RepositoriesItem'

const RepositoriesList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            renderItem={({ item: repo }) => (
                <RepositoriesItem {...repo} />
            )}
        />
    )
}

export default RepositoriesList