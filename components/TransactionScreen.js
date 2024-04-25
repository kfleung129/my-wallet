import React from "react";
import { View, SafeAreaView, FlatList, RefreshControl } from "react-native";
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
    <SafeAreaView >
      <FlatList 
        data={dataList}
        renderItem={(data) => <Transaction data={data.item} />}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={FlatListItemSeperator}
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}; 