import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-web";


// Home component
function Home() {
  return (
    // Main container for the Home component
    <ScrollView style={styles.mainContainer}>
      {/* Title section */}
      <View style={styles.mainTitle}>
        <Text style={styles.titleText}>IPOs Investment</Text>
      </View>

      {/* Image section */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../img/ipo4.png')} // Replace with the actual path to your image
          style={styles.image}
        />
      </View>

      {/* Paragraph section */}
      <View style={styles.paragraphContainer}>
        <Text style={styles.paragraphText}>

          Certainly! Below is an example introductory paragraph for an IPO landing page:

          Welcome to our IPO Center, your gateway to the exciting world of Initial Public Offerings (IPOs)! Here, we provide a comprehensive platform to explore the latest and upcoming IPO opportunities in the financial market. Whether you are an investor seeking potential high-growth stocks, a financial enthusiast staying updated on market trends, or a company looking to go public, our IPO Center is designed to cater to your needs.

          Discover a curated list of companies preparing to make their debut on the stock exchange, learn about their business models, explore offering details, and stay informed about the latest market developments. Our goal is to empower you with valuable insights and information to make well-informed investment decisions.

          Join us on this journey as we navigate through the dynamic landscape of IPOs, unlocking opportunities and staying ahead of market trends. Dive into the world of financial possibilities with our IPO Center – where innovation meets investment.


        </Text>
      </View>
    </ScrollView>
  );
}

// Styles for the Home component
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:"#edd4db",
    flex: 1,
    padding: 16,
    marginLeft: '35%',

  },
  mainTitle: {
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imageContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  image: {
    width: '80%',
    height: 300,
    borderRadius: 8,
  },
  paragraphContainer: {
    marginBottom: 16,
  },
  paragraphText: {
    backgroundColor:"#edd4db",
    width:'80%',
    margin:'auto',
    fontSize: 16,
    color: "#555", // Adjusted text color
  },
});

export default Home;
