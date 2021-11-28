import React, { useState } from 'react'
import { ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native'
import { RowMap, SwipeListView } from 'react-native-swipe-list-view'

import styles from './styles'

interface Item {
  key: string
  [key: string]: any
}

interface SwipableListProps {
  data: Item[]
  renderItem: (
    rowData: ListRenderItemInfo<Item>,
    rowMap: RowMap<Item>,
  ) => JSX.Element
  onDelete: (newItems: Item[]) => void
}

const SwipableList = ({ data, renderItem, onDelete }: SwipableListProps) => {
  const [listData, setListData] = useState(data)
  const closeRow = (rowMap: RowMap<Item>, rowKey: string) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow()
    }
  }

  const deleteRow = (rowMap: RowMap<Item>, rowKey: string) => {
    closeRow(rowMap, rowKey)
    const newData = [...listData]
    const prevIndex = listData.findIndex((item) => item?.key === rowKey)
    newData.splice(prevIndex, 1)
    setListData(newData)
    onDelete(newData)
  }

  const onRowDidOpen = (rowKey: string) => {
    console.log('This row opened', rowKey)
  }

  const renderHiddenItem = (
    rowData: ListRenderItemInfo<Item>,
    rowMap: RowMap<Item>,
  ) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, rowData.item.key)}
      >
        <Text style={styles.backTextWhite}>{'Видалити'}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        disableRightSwipe
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        previewRowKey={listData?.[0]?.key || ''}
        previewOpenValue={-40}
        previewOpenDelay={1500}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  )
}

export default SwipableList
