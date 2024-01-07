import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import IPOCard from './IPOCard'; // Import the IPOCard component

const IpoFetcher = () => {
  const [IpoData, setIpoData] = useState([]);

  useEffect(() => {
    const fetchIpoData = async () => {
      try {
        const response = await fetch(
          "https://cloud.iexapis.com/v1/data/CORE/UPCOMING_IPOS/market?token=pk_426dcba32a6848019e70d304cfadbf3f"
        );
        if (!response.ok) {
          throw new Error('Failed to fetch IPO data');
        }

        const data = await response.json();
        setIpoData(data);
        console.log('Fetched IPO Data:', data);
      } catch (error) {
        console.error('Error fetching IPO data:', error.message);
      }
    };

    fetchIpoData();
  }, []);

  return (
    <View style={styles.ipoFetcherContainer}>
      {IpoData.length > 0 ? (
        <FlatList
          data={IpoData}
          keyExtractor={(item) => item.symbol.toString()}
          renderItem={({ item }) => (
            <IPOCard ipoData={item} />
          )}
        />
      ) : (
        <Text>Loading IPO data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ipoFetcherContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffe0b2',
  },
});

export default IpoFetcher;
