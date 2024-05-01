import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function isNull(item) {
  return (item === '' || item === null || item === undefined);
}

export function searchFilter(dataList, searchKeyword) {
  if (!dataList || dataList.length === 0) return [];
  searchKeyword = searchKeyword.toLowerCase();
  dataList = dataList.filter(item => (
    searchKeyword === '' || item?.title?.toLowerCase().includes(searchKeyword)
  ));
  return dataList;
}

export function dateToString(date) {
  if(isNull(date)) return null;
  const year = date.getFullYear();
  const month =  date.getMonth() + 1;
  const day = date.getDate();
  const dateStr = `${year}/${month}/${day}`;
  return dateStr;
}

export function stringToDate(date) {
  if(isNull(date)) return null;
  const dateList = date.split('/');
  const year = parseInt(dateList[0]);
  const month =  parseInt(dateList[1]);
  const day = parseInt(dateList[2]);
  const newDate = new Date(year, month - 1, day);
  return newDate;
}

export function validateNewTransaction(data) {
  for(let key in data) {
    if(isNull(data[key])) return false;
  }
  return true;
}

export async function addTransaction(data) {
  try {
    if(!validateNewTransaction(data)) {
      Alert.alert(
        'Warning', 'Please input all the required area !', 
        [{ text: 'Ok' }]
      );
      return false;
    }
    let transactions = await getTransactionList();
    if(isNull(transactions) || !Array.isArray(transactions)) return false;
    transactions.unshift(data);
    transactions = JSON.stringify(transactions);
    await saveTransactions(transactions);
    return true;
    
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function editTransaction(data, index) {
  try {
    if(!validateNewTransaction(data)) {
      Alert.alert(
        'Warning', 'Please input all the required area !', 
        [{ text: 'Ok' }]
      );
      return false;
    }
    let transactions = await getTransactionList();
    if(isNull(transactions) || !Array.isArray(transactions) || !transactions[index]) return false;
    transactions[index] = data;
    transactions = JSON.stringify(transactions);
    await saveTransactions(transactions);
    return true;
    
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function deleteTransaction(index) {
  try {
    if(isNull(index)) return false;
    let transactions = await getTransactionList();
    if(isNull(transactions[index])) return false;
    transactions.splice(index, 1);
    transactions = JSON.stringify(transactions);
    await saveTransactions(transactions);
    return true;
    
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function saveTransactions(transactions) {
  try {
    await AsyncStorage.setItem(
      '@Transaction:list',
      transactions
    );
    return true

  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getTransactions() {
  try {
    let transactions = await AsyncStorage.getItem('@Transaction:list');
    if(isNull(transactions)) {
      transactions = await AsyncStorage.setItem('@Transaction:list', '[]');
    }
    return transactions;

  } catch (error) {
    console.error(error);
  }
}

export async function getTransactionList() {
  try {
    let transactionList = await getTransactions();
    transactionList = JSON.parse(transactionList);
    return transactionList;

  } catch (error) {
    console.error(error);
  }
}

export async function resetTransactions() {
  try {
    await AsyncStorage.setItem('@Transaction:list', '[]');

  } catch (error) {
    console.error(error);
  }
}