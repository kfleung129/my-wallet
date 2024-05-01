import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, TextInput, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from '../styles/home.style';
import TransactionList from './TransactionList';
import Button from "./Button";
import ConfirmModal from "./ConfirmModal";
import { getTransactionList, resetTransactions, searchFilter } from "../utils/util";

export default function HomeScreen(props) {
  const { route } = props;
  const [searchKeyword, setSearchKeyword] = useState('');
  const [transactionList, setTransactionList] = useState([]);
  const [refreshing, setRefreshing] = useState(route.params?.reload ?? false);
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();

  const onRefresh = useCallback(async () => {
    async function fetchTransactions() {
      let transactionList = await getTransactionList();
      setTransactionList(transactionList);
      setRefreshing(false);
    }    
    fetchTransactions();
  }, []);

  const confirmRemoveTransactions = useCallback(() => {
    resetTransactions();
    onRefresh();
  }, []);

  useEffect(() => {
    onRefresh();
  }, [props.route.params]);

  return (
    <View style={[styles.container, { opacity: (openModal ? 0.2 : 1) }]} >
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
          handler={() => navigation.navigate("Transaction", { method: "add" })}
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
      {
        transactionList.length > 0 ?
        <TransactionList
          dataList={searchFilter(transactionList, searchKeyword)}
          refreshing={refreshing}
          onRefresh={onRefresh}
        /> :
        <View style={styles.background}>
          <Image
            style={styles.picture}
            source={require('../assets/bg.png')}
          />
          <Text>Add your transaction 💸</Text>
        </View>
      }
    </View>
  );
};