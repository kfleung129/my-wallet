import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from '../styles/home.style';
import TransactionScreen from './TransactionScreen';
import Button from "./Button";
import ConfirmModal from "./ConfirmModal";
import { getTransactionList, resetTransactions, searchFilter } from "../utils/util";

export default function HomeScreen(props) {
  const { route } = props;
  const [searchKeyword, setSearchKeyword] = useState('');
  const [transactionList, setTransactionList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const confirmRemoveTransactions = useCallback(() => {
    resetTransactions()
    onRefresh()
  }, []);

  useEffect(() => {
    async function fetchTransactions() {
      let transactionList = await getTransactionList();
      setTransactionList(transactionList);
    }
    fetchTransactions();
  }, [refreshing])
  
  if(route.params?.reload) {
    onRefresh();
    route.params.reload = false;
  }

  return (
    <View style={styles.container}>
      <ConfirmModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        text="You sure you want to remove all transactions ?"
        callback={confirmRemoveTransactions}
      />
      <SafeAreaView style={styles.header}>
        <TextInput
          style={styles.search}
          onChangeText={setSearchKeyword}
          value={searchKeyword}
          placeholder="Search here..."
        />
        <Button 
          text="+"
          handler={() => navigation.navigate("AddTransaction")}
          btnStyle={styles.addBtn}
          textStyle={styles.addBtnText}
        />
        <Button 
          text="-"
          handler={() => {
            setOpenModal(true);
          }}
          btnStyle={styles.addBtn}
          textStyle={styles.addBtnText}
        />
      </SafeAreaView>
      <TransactionScreen
        dataList={searchFilter(transactionList, searchKeyword)}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};