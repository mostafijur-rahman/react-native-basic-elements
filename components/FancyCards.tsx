import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCards = () => {
  return (
    <View>
        <Text style={styles.headingText}>Fancy Cards</Text>
        <View style={styles.container}>

            <View style={[styles.card]} >
                <Image 
                    source={{uri: 'https://images.prothomalo.com/prothomalo-bangla%2F2023-08%2Fb49eb3ce-c1a2-4cd1-8d84-bd5ca893ccb1%2FF3tlQ3la0AAAygz.jpg?rect=0%2C360%2C3579%2C2013&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.0'}}
                    style={styles.cardImage} />

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>স্টোকসের কারণে বাদ পড়ায় ব্রুকের কোনো অভিযোগ নেই</Text>
                    <Text style={styles.cardDesc}>দুর্ভাগাই বলতে হবে! যথেষ্ট সুযোগ না পেয়েই ওয়ানডে দল থেকে বাদ পড়তে হলো হ্যারি ব্রুককে। মিডল অর্ডারে স্টোকসের ফেরা, ভারতের কন্ডিশনে জো রুটের অভিজ্ঞতার কথা মাথায় রেখেই ওয়ানডে বিশ্বকাপের পরিকল্পনা সাজাচ্ছে ইংলিশরা ...</Text>
                </View>
            </View>

            <View style={[styles.card]}>
                <Image 
                    source={{uri: 'https://images.prothomalo.com/prothomalo-bangla%2F2023-08%2Fb49eb3ce-c1a2-4cd1-8d84-bd5ca893ccb1%2FF3tlQ3la0AAAygz.jpg?rect=0%2C360%2C3579%2C2013&auto=format%2Ccompress&fmt=webp&format=webp&w=900&dpr=1.0'}}
                    style={styles.cardImage} />

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>স্টোকসের কারণে বাদ পড়ায় ব্রুকের কোনো অভিযোগ নেই</Text>
                    <Text style={styles.cardDesc}>দুর্ভাগাই বলতে হবে! যথেষ্ট সুযোগ না পেয়েই ওয়ানডে দল থেকে বাদ পড়তে হলো হ্যারি ব্রুককে। মিডল অর্ডারে স্টোকসের ফেরা, ভারতের কন্ডিশনে জো রুটের অভিজ্ঞতার কথা মাথায় রেখেই ওয়ানডে বিশ্বকাপের পরিকল্পনা সাজাচ্ছে ইংলিশরা ...</Text>
                </View>
            </View>

        </View>
    </View>
  )
}

export default FancyCards

const styles = StyleSheet.create({

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {

  },
  card: {
    height: 360,
    marginVertical: 10,
    marginHorizontal:10,
    borderRadius: 6,
    backgroundColor: '#CACFD2',
    // shadow implement
    elevation: 3,
    shadowOffset: {
        width: 1,
        height: 1
    }
  },
  cardImage: {
    borderRadius: 6,
    height: 200
  },
  cardBody: {

  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5
  },
  cardDesc: {
    fontSize: 15,
    fontWeight: 'normal',
    padding: 5
  },


})