import Diagram from 'assets/icons/diagram.png'
import React from 'react'
import { Image, Text, View } from 'react-native'

interface MainMenuItemsProps {
  title: string
}

const MainMenuItems = ({ title }: MainMenuItemsProps) => (
  <View>
    <Image source={Diagram} />
    <Text>{title}</Text>
  </View>
)

export default MainMenuItems
