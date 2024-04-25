import React, { useState } from "react";
import { ScrollView, View, Text, SafeAreaView, TextInput, Image } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import styles from '../styles/addTransaction.style';
import Button from './Button';
import { addTransaction, dateToString } from '../utils/util';

export default function AddTransactionScreen() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState(new Date()); 
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.picture}
            source={require('../assets/accountant.png')}
          />
        </View>
        <SafeAreaView style={styles.input}>
          <Text style={styles.name}>Date: </Text>
          <DateTimePicker
            mode="date"
            value={date}
            onChange={(e, newDate) => setDate(newDate)}
            display="compact"
          />
        </SafeAreaView>
        <SafeAreaView style={styles.input}>
          <Text style={styles.name}>Title: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setTitle}
            value={title}
            placeholder="e.g. McDonald"
          />
        </SafeAreaView>
        <SafeAreaView style={styles.input}>
          <Text style={styles.name}>Type: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setType}
            value={type}
            placeholder="e.g. Food"
          />
        </SafeAreaView>
        <SafeAreaView style={styles.input}>
          <Text style={styles.name}>Amount: </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setAmount}
            value={amount}
            placeholder=""
            keyboardType="numeric"
          />
        </SafeAreaView>
        <Button 
          text="Add"
          handler={() => {
            addTransaction({
              title: title,
              type: type,
              date: dateToString(date),
              amount: amount
            });
            navigation.navigate("HomeScreen",{ reload: true })
          }}
          btnStyle={styles.addBtn}
          textStyle={styles.addBtnText}
        />
      </View>
    </ScrollView>
  );
}; 