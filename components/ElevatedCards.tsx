import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
        <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal={true} style={styles.container}>

          <View style={[styles.card]}>
            <Text style={styles.cardText}>Tap</Text>
          </View>

          <View style={[styles.card]}>
            <Text style={styles.cardText}>left</Text>
          </View>

          <View style={[styles.card]}>
            <Text style={styles.cardText}>for</Text>
          </View>

          <View style={[styles.card]}>
            <Text style={styles.cardText}>scroll</Text>
          </View>
          
          <View style={[styles.card]}>
            <Text style={styles.cardText}>...</Text>
          </View>

          <View style={[styles.card]}>
            <Text style={styles.cardText}>...</Text>
          </View>

          <View style={[styles.card]}>
            <Text style={styles.cardText}>...</Text>
          </View>

        </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {

  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#76D7C4',
    margin: 8,
    elevation: 0
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },


})