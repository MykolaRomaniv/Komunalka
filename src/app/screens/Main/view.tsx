import MainMenuItems from 'components/MainMenuItems'
import React from 'react'
import { Text, View } from 'react-native'

const ContentView = () => (
  <View>
    <Text>{'Привіт, Педро'}</Text>
    <View>{'NA'}</View>
    <View>
      <Text>{'Сплатити до:'}</Text>
      <Text>{'24'}</Text>
      <Text>{'Квітня'}</Text>
    </View>
    <View>
      <Text>{'Всього до оплати:'}</Text>
      <Text>{'1250 UAH'}</Text>
      <View>
        <Text>{'-20.30 UAH/-15%'}</Text>
      </View>
      <View>
        <Text>{'минулий місяць'}</Text>
      </View>
    </View>
    <View>
      <MainMenuItems title="Оплатити комуналку" />
      <MainMenuItems title="Адреси" />
      <MainMenuItems title="Статистика" />
      <MainMenuItems title="Нагадування" />
    </View>
    <View>
      <Text>{'Історія платежів:'}</Text>
    </View>
    <Text>{'КФ ПАТ КБП”ПРИВАТБАНК”'}</Text>
    <Text>{'Платник'}</Text>
    <Text>{'Григорак Ілона Анатоліївна'}</Text>
    <Text>{'Дата оплати'}</Text>
    <Text>{'20.04.2021'}</Text>
    <Text>{'Дата обробки'}</Text>
    <Text>{'21.04.2021'}</Text>
  </View>
)

export default ContentView
