import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from '../styles/transaction.style';

export default function HomeScreen(props) {
  const { data } = props;
  const { title, type, date, amount } = data;

  return (
    <View style={styles.transaction}>
      <View style={styles.info}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.typeTag}>
            <Text style={styles.type}>{type}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <View style={styles.total}>
        <Text style={{ ...styles.amount, ...(amount > 0 ? styles.positive : styles.negative) }}>
          {amount} HKD
          </Text>
      </View>
    </View>
  );
};