import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IPOCard = ({ ipoData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{ipoData.companyName}</Text>
      <Text style={styles.subtitle}>Symbol: {ipoData.symbol}</Text>
      <Text style={styles.subtitle}>Status: {ipoData.status}</Text>
      <Text style={styles.subtitle}>Offering Date: {ipoData.offeringDate}</Text>
      <Text style={styles.subtitle}>Price Range: ${ipoData.priceRangeLow} - ${ipoData.priceRangeHigh}</Text>
      <Text style={styles.subtitle}>Volume: {ipoData.volume}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#d0c986', 
    borderWidth: 2,
    borderColor: '#5300eb',
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 4,
  },
});

export default IPOCard;
