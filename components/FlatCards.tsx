import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>

          <View style={[styles.card, styles.colorRed]}>
            <Text style={styles.cardText}>Red</Text>
          </View>

          <View style={[styles.card, styles.colorGreen]}>
            <Text style={styles.cardText}>Green</Text>
          </View>

          <View style={[styles.card, styles.colorYellow]}>
            <Text style={styles.cardText}>Yellow</Text>
          </View>

          <View style={[styles.card, styles.colorBlue]}>
            <Text style={styles.cardText}>Blue</Text>
          </View>
          
          <View style={[styles.card, styles.colorBlack]}>
            <Text style={styles.cardText}>Black</Text>
          </View>

        </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 8
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  colorRed: {
    backgroundColor: '#FE6868'
  },
  colorGreen: {
    backgroundColor: '#27AE60'
  },
  colorYellow: {
    backgroundColor: '#F4D03F'
  },
  colorBlue: {
    backgroundColor: '#3498DB'
  },
  colorBlack: {
    backgroundColor: '#2E4053'
  },

  
})