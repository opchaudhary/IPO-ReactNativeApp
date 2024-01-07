// Sidebar.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

// Sidebar component
const Sidebar = () => {
  const navigation = useNavigation();
  const [showIconNames, setShowIconNames] = useState(true);

  // Toggle display of icon names
  const toggleIconNames = () => {
    setShowIconNames(!showIconNames);
  };

  // Navigate to a specific screen
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.sidebar}>
      {/* Toggle Icon Names */}
      <TouchableOpacity onPress={toggleIconNames} style={styles.menuIcon}>
        <Icon name="menu" size={24} color="white" />
      </TouchableOpacity>

      {/* Render sidebar items if showIconNames is true */}
      {showIconNames && (
        <View>
          {/* Home */}
          <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.sidebarItem}>
            <Icon name="home" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>

          {/* Dashboard */}
          <TouchableOpacity onPress={() => navigateToScreen('Exchange')} style={styles.sidebarItem}>
            <Icon name="archive" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Exchange</Text>
          </TouchableOpacity>

          {/* IPOs */}
          <TouchableOpacity onPress={() => navigateToScreen('IPOs')} style={styles.sidebarItem}>
            <Icon name="grid" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>IPOs</Text>
          </TouchableOpacity>

          {/* Login */}
          <TouchableOpacity onPress={() => navigateToScreen('Login')} style={styles.sidebarItem}>
            <Icon name="account" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Login</Text>
          </TouchableOpacity>

          {/* Register */}
          <TouchableOpacity onPress={() => navigateToScreen('Registration')} style={styles.sidebarItem}>
            <Icon name="lock" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#160a06',
    width: '35%',
    position: 'absolute ',
    top: 5,
    bottom: 5,
    zIndex: 1,
  },
  menuIcon: {
    marginBottom: 10,
  },
  sidebarTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sidebarBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeader: {
    marginRight: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  sidebarText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Sidebar;
