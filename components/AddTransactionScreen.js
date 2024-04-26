import React, { useState } from 'react';
import { Alert, View, Text, SafeAreaView, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/addTransaction.style';
import Button from './Button';
import { addTransaction, dateToString, validateNewTransaction } from '../utils/util';
import transactionTypeList from '../assets/type.json';

export default function AddTransactionScreen() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState(new Date()); 
  const [amount, setAmount] = useState('');
  const [polarity, setPolarity] = useState('-');
  const navigation = useNavigation();
  const isPositive = (polarity === '+');
  const confirmAddTransaction = async () => {
    const newTransaction = {
      title: title,
      type: type,
      date: dateToString(date),
      amount: (isPositive ? amount : -amount)
    };
    let res = await addTransaction(newTransaction);
    if(!res) return;
    navigation.navigate("HomeScreen", { reload: true })
  }
  
  return (
    <KeyboardAwareScrollView extraScrollHeight={15}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.picture}
            source={require('../assets/saving.png')}
          />
        </View>
        <View style={styles.inputWrapper}>
          <SafeAreaView style={styles.input}>
            <Text style={styles.name}>Date: </Text>
            <DateTimePicker
              mode="date"
              value={date}
              onChange={(e, newDate) => setDate(newDate)}
              display="compact"
              maximumDate={new Date()}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.input}>
            <Text style={styles.name}>Title: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setTitle}
              value={title}
              placeholder="..."
            />
          </SafeAreaView>
          <SafeAreaView style={styles.input}>
            <Text style={styles.name}>Type: </Text>
            <RNPickerSelect
              onValueChange={setType}
              value={type}
              style={styles.picker}
              items={transactionTypeList}
              placeholder={{
                label: '...',
            }}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.input}>
            <Text style={styles.name}>Amount: </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={setAmount}
              value={amount}
              placeholder="..."
              keyboardType="numeric"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.buttons}>
            <Button 
              text={polarity}
              handler={() => setPolarity(isPositive ? '-' : '+')}
              btnStyle={[styles.polarityBtn, { backgroundColor: isPositive ? '#0F9D58' : '#EA4335' }]}
              textStyle={styles.polarityBtnText}
            />
            <Button 
              text="Add"
              handler={confirmAddTransaction}
              btnStyle={styles.addBtn}
              textStyle={styles.addBtnText}
            />
          </SafeAreaView>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}; 