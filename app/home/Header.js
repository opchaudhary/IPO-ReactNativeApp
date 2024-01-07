// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon from the library
import { useNavigation } from '@react-navigation/native';

// Header component
const Header = ({ toggleTheme }) => {
  const navigation = useNavigation();

  return (
    // Main container for the header
    <View style={styles.header}>
      {/* Left side elements */}
      <View style={styles.headerLeft}>
        <TouchableOpacity>
          {/* Icon for left side element */}
          <Icon name="select-search" size={24} color="white" />
        </TouchableOpacity>
      </View>

     
    </View>
  );
};

// Styles for the Header component
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    // backgroundColor: '#2c3e50', // Background color for the header
    width: '70%', // Width of the header relative to the screen width
    position: 'absolute',
    top: 0,
    left: '30%', // Adjusted position for better alignment
    zIndex: 0, // Adjusted zIndex for better layering
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default Header;
