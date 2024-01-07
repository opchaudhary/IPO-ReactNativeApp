import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ExchangeCard = ({ exchangeData }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{exchangeData.symbol}</Text>
      <Text style={styles.subtitle}>Exchange Rate: {exchangeData.rate}</Text>
      <Text style={styles.subtitle}>Timestamp: {new Date(exchangeData.timestamp).toLocaleString()}</Text>
     
    </View>
  );
};

const CurrencyExchange = () => {
  const [ExchangeData, setExchangeData] = React.useState([]);

  React.useEffect(() => {
    const fetchExchangeData = async () => {
      try {
        const response = await fetch(
          "https://cloud.iexapis.com/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_426dcba32a6848019e70d304cfadbf3f"
        );
        if (!response.ok) {
          throw new Error('Failed to fetch exchange data');
        }

        const data = await response.json();
        setExchangeData(data);
        console.log('Fetched Exchange Data:', data);
      } catch (error) {
        console.error('Error fetching Exchange data:', error.message);
      }
    };

    fetchExchangeData();
  }, []);

  return (
    <View style={styles.container}>
      {ExchangeData.length > 0 ? (
        <FlatList
          data={ExchangeData}
          keyExtractor={(item) => item.symbol}
          renderItem={({ item }) => <ExchangeCard exchangeData={item} />}
        />
      ) : (
        <Text>Loading exchange data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
   backgroundColor: '#ffe0b2', // Light gray background
  },
  card: {
    backgroundColor: '#d0c986', // White background for the card
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
    color: '#160a06', // Dark text color
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 4,
    color: '#160a06', // Medium dark text color
  },
});

export default CurrencyExchange;
