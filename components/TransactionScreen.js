import React from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from '../styles/transaction.style';
import Transaction from './Transaction';

function FlatListItemSeperator() {
  return (
    <View style={{ height: 15 }} />
  );
}

export default function HomeScreen(props) {
  const { dataList, refreshing, onRefresh } = props;

  return (
    <GestureHandlerRootView >
      <FlatList 
        data={dataList}
        renderItem={(data) => (
          <Transaction data={data.item} index={data.index} refreshing={refreshing} onRefresh={onRefresh} />
        )}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={FlatListItemSeperator}
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </GestureHandlerRootView>
  );
}; 